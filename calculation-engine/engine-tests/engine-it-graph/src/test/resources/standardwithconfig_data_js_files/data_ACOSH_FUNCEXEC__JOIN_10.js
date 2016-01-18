var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'A1\n2.993222846126381', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 2.993222846126381<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2525ff7e'},
{id: '1', label: 'VALUE\n10.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 10.0<br>Type: CONSTANT_VALUE<br>Id: 1<br>Formula Expression: Formula String: VALUE; Formula Values: 10.0; Formula Ptg: 10.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2525ff7e'},
{id: '2', label: 'ACOSH\n2.993222846126381', color: '#f0ad4e', title: 'Name: ACOSH<br>Alias: null<br>Value: 2.993222846126381<br>Type: FUNCTION<br>Id: 2<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2525ff7e'},
{id: '3', label: 'E5\n5.192925985263684', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 5.192925985263684<br>Type: CELL_WITH_FORMULA<br>Id: 3<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2525ff7e'},
{id: '4', label: 'C2\n90.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 90.0<br>Type: CELL_WITH_VALUE<br>Id: 4<br>Formula Expression: Formula String: C2; Formula Values: 90.0; Formula Ptg: 90.0; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2525ff7e'},
{id: '5', label: 'ACOSH\n5.192925985263684', color: '#f0ad4e', title: 'Name: ACOSH<br>Alias: null<br>Value: 5.192925985263684<br>Type: FUNCTION<br>Id: 5<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2525ff7e'},
{id: '6', label: 'E7\nDEFINE', color: '#31b0d5', title: 'Name: E7<br>Alias: null<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 6<br>Formula Expression: Formula String: DEFINE(ACOSH(C2), VALUE, C2, VALUE); Formula Values: DEFINE(ACOSH(90.0), #, 90.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2525ff7e'},
{id: '8', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 8<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2525ff7e'},
{id: '9', label: 'C2\n90.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 90.0<br>Type: CELL_WITH_VALUE<br>Id: 9<br>Formula Expression: Formula String: C2; Formula Values: 90.0; Formula Ptg: 90.0; Ptgs: C2 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2525ff7e'},
{id: '10', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: 10<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2525ff7e'},
{id: '11', label: 'E5\n5.192925985263684', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 5.192925985263684<br>Type: CELL_WITH_FORMULA<br>Id: 11<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2525ff7e'},
{id: '12', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Alias: null<br>Value: DEFINE<br>Type: FUNCTION<br>Id: 12<br>Formula Expression: Formula String: DEFINE(ACOSH(C2), VALUE, C2, VALUE); Formula Values: DEFINE(ACOSH(90.0), #, 90.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2525ff7e'},
{id: '13', label: 'F7\n5.192925985263684', color: '#31b0d5', title: 'Name: F7<br>Alias: null<br>Value: 5.192925985263684<br>Type: CELL_WITH_FORMULA<br>Id: 13<br>Formula Expression: Formula String: FUNCEXEC(C2, VALUE); Formula Values: FUNCEXEC(90.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2525ff7e'},
{id: '15', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 15<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2525ff7e'},
{id: '16', label: 'C2\n90.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 90.0<br>Type: CELL_WITH_VALUE<br>Id: 16<br>Formula Expression: Formula String: C2; Formula Values: 90.0; Formula Ptg: 90.0; Ptgs: C2 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2525ff7e'},
{id: '17', label: 'FUNCEXEC\n5.192925985263684', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 5.192925985263684<br>Type: FUNCTION<br>Id: 17<br>Formula Expression: Formula String: FUNCEXEC(C2, VALUE); Formula Values: FUNCEXEC(90.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2525ff7e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1', to: '2'},
{from: '2', to: '0'},
{from: '4', to: '5'},
{from: '5', to: '3'},
{from: '11', to: '12'},
{from: '10', to: '12'},
{from: '9', to: '12'},
{from: '8', to: '12'},
{from: '12', to: '6'},
{from: '16', to: '17'},
{from: '15', to: '17'},
{from: '17', to: '13'},
{from: '5', to: '11'}
                            ]);