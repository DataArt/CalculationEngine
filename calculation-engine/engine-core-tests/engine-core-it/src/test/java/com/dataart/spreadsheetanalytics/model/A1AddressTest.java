package com.dataart.spreadsheetanalytics.model;

import static org.assertj.core.api.StrictAssertions.assertThat;

import org.junit.Test;

public class A1AddressTest {

    @Test
    public void fromA1Address_A1_ReturnedRow1Column1() {
        //given
        String a1 = "A1";
        int row = 0;
        int column = 0;

        //when
        A1Address address = A1Address.fromA1Address(a1);

        //then
        assertThat(address.row()).isEqualTo(row);
        assertThat(address.column()).isEqualTo(column);
    }

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
}
