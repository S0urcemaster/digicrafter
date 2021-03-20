package de.digicraft.listtagger;

import javax.swing.*;
import javax.swing.table.AbstractTableModel;
import javax.swing.table.TableColumn;
import java.awt.event.*;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Scanner;

public class ListTagger {

    private JPanel rootPanel;
    private JPanel filterPanel;
    private JPanel listPanel;
    private JPanel tagsPanel;
    private JPanel filterActionsPanel;
    private JPanel filtersPanel;
    private JTable taggedListTable;
    private JPanel tagActionsPanel;
    private JPanel tagListPanel;
    private JList filtersList;
    private JList tagList;
    private final Action newListAction = new NewListAction("New", KeyEvent.VK_N);
    private final Action openAction = new OpenAction("Open", KeyEvent.VK_O);
    private final Action saveAction = new SaveAction("Autosave", null);
    private final Action exitAction = new ExitAction("Exit", KeyEvent.VK_E);
    private final Action addItemAction = new AddItemAction("Add Item", KeyEvent.VK_A);
    private final Action addFieldAction = new AddFieldAction("Add Field", KeyEvent.VK_F);
    private TaggedListTableModel tagListModel;
    private File file;

    public ListTagger () {
        JMenuBar menuBar = new JMenuBar();
        menuBar.add(createFileMenu());
        menuBar.add(createEditMenu());
        JFrame frame = new JFrame("ListTagger");
        frame.setJMenuBar(menuBar);
        frame.setContentPane(rootPanel);
        frame.setDefaultCloseOperation(JFrame.DO_NOTHING_ON_CLOSE);
        frame.addWindowListener(new WindowAdapter() {
            @Override
            public void windowClosing(WindowEvent e) {
                super.windowClosing(e);
                System.exit(0);
            }
        });
        frame.setSize(1000, 700);
        frame.setLocationRelativeTo(null);
        StartDialog startDialog = new StartDialog();
        int ret = startDialog.run();
        switch (ret) {
            case StartDialog.NEW -> newList();
            case StartDialog.OPEN -> openList();
            case StartDialog.EXIT -> System.exit(0);
            default -> throw new IllegalStateException("Unexpected value: " + ret);
        }
        frame.setVisible(true);
    }

    private abstract static class MenuAction extends AbstractAction {
        public MenuAction(String text, Integer mnemonic) {
            super(text, null);
            putValue(SHORT_DESCRIPTION, null);
            putValue(MNEMONIC_KEY, mnemonic);
        }
    }

    private class NewListAction extends MenuAction {
        public NewListAction (String text, Integer mnemonic) {
            super(text, mnemonic);
        }
        @Override
        public void actionPerformed(ActionEvent e) {
            newList();
        }
    }

    private void newList () {
        JFileChooser fc = new JFileChooser();
        int ret = fc.showSaveDialog(rootPanel);
        if (ret == JFileChooser.APPROVE_OPTION) {
            File file = fc.getSelectedFile();
            if (file != null) {
                try {
                    boolean success = file.createNewFile();
                    if (success) {
                        this.file = file;
                        String result = JOptionPane.showInputDialog("Add field:");
                        if (result == null || result.equals("")) {
                            JOptionPane.showMessageDialog(rootPanel, "Could not create empty field");
                        }
                        tagListModel = new TaggedListTableModel();
                        taggedListTable.setModel(tagListModel);
                        addField(result);
                    } else {
                        JOptionPane.showMessageDialog(rootPanel, "Could not create file");
                    }
                } catch (IOException ioException) {
                    JOptionPane.showMessageDialog(rootPanel, "Could not create file");
                }
            }
        }
    }

    private class AddFieldAction extends MenuAction {
        public AddFieldAction (String text, Integer mnemonic) {
            super(text, mnemonic);
        }
        @Override
        public void actionPerformed(ActionEvent e) {
            String result = JOptionPane.showInputDialog("Field name:");
            if(result == null || result.equals("")) return;
            addField(result);
        }
    }

    private void addField (String field) {
        tagListModel.addHeader(field);
        tagListModel.fireTableStructureChanged();
        taggedListTable.setModel(tagListModel);
        tagListModel.fireTableStructureChanged();
        taggedListTable.repaint();
        saveList();
    }

    private class SaveAction extends MenuAction {
        public SaveAction (String text, Integer mnemonic) {
            super(text, mnemonic);
        }
        @Override
        public void actionPerformed(ActionEvent e) {
            // inactive to show there is autosave
        }
    }

    private void saveList () {
        StringBuilder s = new StringBuilder();
        StringBuilder head = new StringBuilder();
        for (int i = 0; i < tagListModel.list.header.size(); i++) {
            head.append(tagListModel.list.header.get(i));
            if (i < tagListModel.list.header.size() -1) {
                head.append(", ");
            }
        }
        if (tagListModel.list.items.size() > 0) head.append("\n");
        s.append(head.toString());
        for (int i = 0; i < tagListModel.list.items.size(); i++) {
            s.append(tagListModel.list.items.get(i).itemData);
            if (i < tagListModel.list.items.size() -1) {
                s.append("\n");
            }
        }
        try (PrintWriter out = new PrintWriter(file)) {
            out.print(s.toString());
        } catch (FileNotFoundException e) {
            JOptionPane.showMessageDialog(rootPanel, "Could not write file: "+file.getAbsolutePath());
        }
    }

    private class OpenAction extends MenuAction {
        public OpenAction (String text, Integer mnemonic) {
            super(text, mnemonic);
        }
        @Override
        public void actionPerformed(ActionEvent e) {
            openList();
        }
    }

    private void openList () {
        JFileChooser fc = new JFileChooser();
        int ret = fc.showOpenDialog(rootPanel);
        if (ret == JFileChooser.APPROVE_OPTION) {
            File file = fc.getSelectedFile();
            if (file != null) {
                try {
                    tagListModel = new TaggedListTableModel();
                    taggedListTable.setModel(tagListModel);
                    Scanner input = new Scanner(file);
                    if(input.hasNextLine()) {
                        tagListModel.setHeader(input.nextLine());
                    }
                    while (input.hasNextLine()) {
                        String s = input.nextLine();
                        System.out.println(s);
                        tagListModel.add(new TaggedItem(s));
                    }
                    tagListModel.fireTableStructureChanged();
                } catch (IOException ioException) {
                    JOptionPane.showMessageDialog(rootPanel, "Could not open file");
                }
                this.file = file;
            }
        }
    }

    private class ExitAction extends MenuAction {
        public ExitAction (String text, Integer mnemonic) {
            super(text, mnemonic);
        }
        @Override
        public void actionPerformed(ActionEvent e) {
            System.exit(0);
        }
    }

    private class AddItemAction extends MenuAction {
        public AddItemAction (String text, Integer mnemonic) {
            super(text, mnemonic);
        }
        @Override
        public void actionPerformed(ActionEvent e) {
            String result = JOptionPane.showInputDialog("Item content:");
            if(result == null || result.equals("")) return;
            addItem(result);
        }
    }

    private void addItem (String value) {
        TaggedItem item = new TaggedItem(value);
        tagListModel.add(item);
        tagListModel.fireTableDataChanged();
        tagListModel.fireTableStructureChanged();
        saveList();
    }

    private JMenu createFileMenu() {
        JMenu menu = new JMenu("File");
        JMenuItem menuItem = new JMenuItem(newListAction);
        menu.add(menuItem);
        menuItem = new JMenuItem(openAction);
        menu.add(menuItem);
        menuItem = new JMenuItem(saveAction);
        saveAction.setEnabled(false);
        menu.add(menuItem);
        menuItem = new JMenuItem(exitAction);
        menu.add(menuItem);
        return menu;
    }

    private JMenu createEditMenu () {
        JMenu menu = new JMenu("Edit");
        JMenuItem menuItem = new JMenuItem(addItemAction);
        addItemAction.putValue(Action.ACCELERATOR_KEY, KeyStroke.getKeyStroke(KeyEvent.VK_ENTER, KeyEvent.CTRL_DOWN_MASK));
        menu.add(menuItem);
        menuItem = new JMenuItem(addFieldAction);
        addFieldAction.putValue(Action.ACCELERATOR_KEY, KeyStroke.getKeyStroke(KeyEvent.VK_F, KeyEvent.CTRL_DOWN_MASK));
        menu.add(menuItem);
        return menu;
    }

    public static void main(String[] args) throws ClassNotFoundException, UnsupportedLookAndFeelException, InstantiationException, IllegalAccessException {
        UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
        new ListTagger();
    }
}
