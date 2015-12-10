var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0388d001-7fd1-40f4-98c2-e70db05c35a7', label: 'A1\n', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 0388d001-7fd1-40f4-98c2-e70db05c35a7<br>Formula Expression: Formula String: A1; Formula Values: ; Formula Ptg: ; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3c130745'},
{id: '1c581428-8ded-449f-a864-bc2e85631632', label: 'CONCATENATE\n', color: '#f0ad4e', title: 'Name: CONCATENATE<br>Alias: null<br>Value: <br>Type: FUNCTION<br>Id: 1c581428-8ded-449f-a864-bc2e85631632<br>Formula Expression: Formula String: CONCATENATE(A2, A1); Formula Values: CONCATENATE(, ); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3c130745'},
{id: 'ece70d6d-c64e-444f-b43c-ad61f15b0d59', label: 'B2\n', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: <br>Type: CELL_WITH_FORMULA<br>Id: ece70d6d-c64e-444f-b43c-ad61f15b0d59<br>Formula Expression: Formula String: CONCATENATE(A2, A1); Formula Values: CONCATENATE(, ); Formula Ptg: ,  CONCATENATE ; Ptgs: A2, A1 CONCATENATE  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3c130745'},
{id: 'a6a4f6d1-dc3d-47c1-9d9d-26ecb856a1cf', label: 'A2\n', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: a6a4f6d1-dc3d-47c1-9d9d-26ecb856a1cf<br>Formula Expression: Formula String: A2; Formula Values: ; Formula Ptg: ; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3c130745'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1c581428-8ded-449f-a864-bc2e85631632', to: 'ece70d6d-c64e-444f-b43c-ad61f15b0d59'},
{from: 'a6a4f6d1-dc3d-47c1-9d9d-26ecb856a1cf', to: '1c581428-8ded-449f-a864-bc2e85631632'},
{from: '0388d001-7fd1-40f4-98c2-e70db05c35a7', to: '1c581428-8ded-449f-a864-bc2e85631632'}
                            ]);