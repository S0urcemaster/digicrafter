package de.digicraft.listtagger;

import javax.swing.table.AbstractTableModel;
import java.util.Collections;

public class TaggedListTableModel extends AbstractTableModel {

    TaggedList list;

    public TaggedListTableModel() {
        list = new TaggedList();
    }

    public void setHeader (String header) {
        Collections.addAll(list.header, header.replaceAll("\\s+", "").split(","));
    }

    public void addHeader (String head) {
        list.header.add(head);
    }

    public void add (TaggedItem item) {
        list.items.add(item);
    }

    @Override
    public int getRowCount() {
        return list.items.size();
    }

    @Override
    public int getColumnCount() {
        if (getRowCount() > 0) {
            return list.header.size();
        }
        return 0;
    }

    @Override
    public String getColumnName(int col) {
        return list.header.get(col);
    }

    @Override
    public Object getValueAt(int rowIndex, int columnIndex) {
        if (list.items.get(rowIndex) == null) return null;
        if (columnIndex >= list.items.get(rowIndex).fields.length) return null;
        return list.items.get(rowIndex).fields[columnIndex];
    }
}
