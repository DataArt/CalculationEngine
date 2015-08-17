package com.dataart.spreadsheetanalytics.api.model;

/**
 * TODO
 */
public interface ICellAddress {

    Integer row();

    Integer column();

    A1Address a1Address();

    IModelId modelId();

    /**
     * A1 format
     */
    public static class A1Address {
        final String address;

        /**
         * Creates new instance of this class with given cell @address in A1 format, e.g. <code>new A1Address("A1")</code>
         */
        public A1Address(String address) {
            this.address = address;
        }

        @Override
        public String toString() {
            return address;
        }
    }

}
