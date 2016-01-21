var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '368', label: 'A1\n6.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 6.0<br>Type: CELL_WITH_FORMULA<br>Id: 368<br>Formula Expression: Formula String: IF(A3>A4,B3,B4); Formula Values: IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@37eeec90'},
{id: '369', label: 'A3\n3.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 369<br>Formula Expression: Formula String: A3; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: A3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@37eeec90'},
{id: '370', label: 'A4\n5.0', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 370<br>Formula Expression: Formula String: A4; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A4 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@37eeec90'},
{id: '371', label: '>\nFALSE', color: '#f0ad4e', title: 'Name: ><br>Alias: null<br>Value: FALSE<br>Type: OPERATOR<br>Id: 371<br>Formula Expression: Formula String: A3 > A4; Formula Values: 3.0 > 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@37eeec90'},
{id: '372', label: 'IF\n6.0', color: '#f0ad4e', title: 'Name: IF<br>Alias: null<br>Value: 6.0<br>Type: IF<br>Id: 372<br>Formula Expression: Formula String: IF(A3>A4,B3,B4); Formula Values: IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: c77338ec-8db6-49bc-89b9-31d44a0d6946'},
{id: '373', label: 'B4\n6.0', color: '#31b0d5', title: 'Name: B4<br>Alias: null<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: 373<br>Formula Expression: Formula String: B4; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B4 Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@37eeec90'},
{id: '375', label: '+\n6.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 6.0<br>Type: OPERATOR<br>Id: 375<br>Formula Expression: Formula String: IF(A3>A4,B3,B4); Formula Values: IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 9 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@37eeec90'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '373', to: '372'},
{from: '370', to: '371'},
{from: '371', to: '372'},
{from: '369', to: '371'},
{from: '372', to: '375'},
{from: '375', to: '368'}
                            ]);