package com.dataart.spreadsheetanalytics.api.model;

/**
 * TODO
 */
public interface ICellAddress {

    IModelId modelId();

    ISheetId sheetId();

    Long row();

    Long column();

    A1Address a1Address();

    R1C1Address r1c1Address();
    

    //TODO: to diuscuss
    int sheetIndex();

    /**
     * A1 format
     */
    public static class A1Address {
        final String address;

        public A1Address(String address) {
            this.address = address;
        }

        @Override
        public String toString() {
            return address;
        }

        /**
         * Creates new instance of this class with given cell address in A1 format, e.g. <code>new A1Address("A1")</code>
         * @param address String with Address in A1 format
         * @return new object
         */
        public static A1Address from(String address) {
            return new A1Address(address);
        }

    }

    /**
     * R1C1 format
     */
    public static class R1C1Address {
        final String address;

        public R1C1Address(String address) {
            this.address = address;
        }

        @Override
        public String toString() {
            return address;
        }
    }

}
