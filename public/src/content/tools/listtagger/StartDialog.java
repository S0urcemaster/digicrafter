package de.digicraft.listtagger;

import javax.swing.*;
import java.awt.event.*;

public class StartDialog extends JDialog {

    public static final int OPEN = 1;
    public static final int NEW = 2;
    public static final int EXIT = 3;

    private int returnState = 0;

    private JPanel contentPane;
    private JButton openButton;
    private JButton exitButton;
    private JButton newButton;

    public StartDialog() {
        setContentPane(contentPane);
        setModal(true);
        getRootPane().setDefaultButton(openButton);

        openButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                onOpen();
            }
        });

        exitButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                onExit();
            }
        });

        newButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                onNew();
            }
        });

        // call onCancel() when cross is clicked
        setDefaultCloseOperation(DO_NOTHING_ON_CLOSE);
        addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent e) {
                onExit();
            }
        });

        // call onCancel() on ESCAPE
        contentPane.registerKeyboardAction(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                onExit();
            }
        }, KeyStroke.getKeyStroke(KeyEvent.VK_ESCAPE, 0), JComponent.WHEN_ANCESTOR_OF_FOCUSED_COMPONENT);
    }

    public int run() {
        pack();
        setLocationRelativeTo(null);
        setVisible(true);
        return returnState;
    }

    private void onOpen() {
        returnState = OPEN;
        dispose();
    }

    private void onNew() {
        returnState = NEW;
        dispose();
    }

    private void onExit() {
        returnState = EXIT;
        dispose();
    }
}
