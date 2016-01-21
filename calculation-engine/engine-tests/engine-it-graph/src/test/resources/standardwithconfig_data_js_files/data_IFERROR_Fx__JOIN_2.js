var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3937', label: '+\n6.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 6.0<br>Type: OPERATOR<br>Id: 3937<br>Formula Expression: Formula String: IF(A3>A4,B3,B4); Formula Values: IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 9 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7488c183'},
{id: '3938', label: 'B5\n-2.0', color: '#31b0d5', title: 'Name: B5<br>Alias: null<br>Value: -2.0<br>Type: CELL_WITH_FORMULA<br>Id: 3938<br>Formula Expression: Formula String: IFERROR(B3, A3 - VALUE); Formula Values: IFERROR(7.0, 3.0 - 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7488c183'},
{id: '3941', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: 3941<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7488c183'},
{id: '3942', label: '-\n-2.0', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: -2.0<br>Type: OPERATOR<br>Id: 3942<br>Formula Expression: Formula String: A3 - VALUE; Formula Values: 3.0 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7488c183'},
{id: '3943', label: 'B3\n7.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 3943<br>Formula Expression: Formula String: B3; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: B3 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7488c183'},
{id: '3944', label: 'IFERROR\n-2.0', color: '#f0ad4e', title: 'Name: IFERROR<br>Alias: null<br>Value: -2.0<br>Type: FUNCTION<br>Id: 3944<br>Formula Expression: Formula String: IFERROR(B3, A3 - VALUE); Formula Values: IFERROR(7.0, 3.0 - 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7488c183'},
{id: '3930', label: 'A1\n6.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 6.0<br>Type: CELL_WITH_FORMULA<br>Id: 3930<br>Formula Expression: Formula String: IF(A3>A4,B3,B4); Formula Values: IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7488c183'},
{id: '3931', label: 'A3\n3.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 3931<br>Formula Expression: Formula String: A3; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: A3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7488c183'},
{id: '3932', label: 'A4\n5.0', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 3932<br>Formula Expression: Formula String: A4; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A4 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7488c183'},
{id: '3933', label: '>\nFALSE', color: '#f0ad4e', title: 'Name: ><br>Alias: null<br>Value: FALSE<br>Type: OPERATOR<br>Id: 3933<br>Formula Expression: Formula String: A3 > A4; Formula Values: 3.0 > 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7488c183'},
{id: '3934', label: 'IF\n6.0', color: '#f0ad4e', title: 'Name: IF<br>Alias: null<br>Value: 6.0<br>Type: IF<br>Id: 3934<br>Formula Expression: Formula String: IF(A3>A4,B3,B4); Formula Values: IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: 074cef55-471d-dbf0-bcd4-601560767aa4'},
{id: '3935', label: 'B4\n6.0', color: '#31b0d5', title: 'Name: B4<br>Alias: null<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: 3935<br>Formula Expression: Formula String: B4; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B4 Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7488c183'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3935', to: '3934'},
{from: '3931', to: '3933'},
{from: '3942', to: '3944'},
{from: '3932', to: '3933'},
{from: '3933', to: '3934'},
{from: '3941', to: '3942'},
{from: '3943', to: '3944'},
{from: '3934', to: '3937'},
{from: '3944', to: '3938'},
{from: '3937', to: '3930'},
{from: '3931', to: '3942'}
                            ]);