/*
Copyright 2015 DataArt Apps, Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
package com.dataart.spreadsheetanalytics.model;

import static org.assertj.core.api.Assertions.assertThat;

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

}
