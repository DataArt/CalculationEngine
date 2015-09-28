package com.dataart.spreadsheetanalytics.com.dataart.spreadsheetanalytics.model;

import static org.assertj.core.api.StrictAssertions.assertThat;

import org.junit.Test;

import com.dataart.spreadsheetanalytics.model.A1Address;

public class A1AddressTest {

    @Test
    public void fromA1Address_A1_ReturnedA1() {
        //given
        String a1 = "A1";

        //when
        A1Address address = A1Address.fromA1Address(a1);

        //then
        assertThat(address.address()).isEqualTo(a1);
    }

    @Test
    public void fromA1Address_A1_ReturnedTheSameObject() {
        //given
        String a1 = "A1";

        //when
        A1Address address = A1Address.fromA1Address(a1);

        //then
        assertThat(address.a1Address()).isEqualTo(address);
    }

    @Test
    public void fromRowColumn_Row1Column1_ReturnedRow1Column1() {
        //given
        int row = 1;
        int column = 1;

        //when
        A1Address address = A1Address.fromRowColumn(row, column);

        //then
        assertThat(address.row()).isEqualTo(row);
        assertThat(address.column()).isEqualTo(column);
    }

    @Test
    public void fromRowColumn_Row1Column1_ReturnedTheSameObject() {
        //given
        int row = 1;
        int column = 1;

        //when
        A1Address address = A1Address.fromRowColumn(row, column);

        //then
        assertThat(address.a1Address()).isEqualTo(address);
    }
}
