var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'D2\nFALSE', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: ISBLANK(A6); Formula Values: ISBLANK(4.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@518cf84a'},
{id: '1', label: 'A6\n4.0', color: '#31b0d5', title: 'Name: A6<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 1<br>Formula Expression: Formula String: A6; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: A6 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@518cf84a'},
{id: '2', label: 'ISBLANK\nFALSE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 2<br>Formula Expression: Formula String: ISBLANK(A6); Formula Values: ISBLANK(4.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@518cf84a'},
{id: '3', label: 'D3\nFALSE', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 3<br>Formula Expression: Formula String: ISBLANK(VALUE); Formula Values: ISBLANK(6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@518cf84a'},
{id: '4', label: 'VALUE\n6.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 6.0<br>Type: CONSTANT_VALUE<br>Id: 4<br>Formula Expression: Formula String: VALUE; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@518cf84a'},
{id: '5', label: 'ISBLANK\nFALSE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 5<br>Formula Expression: Formula String: ISBLANK(VALUE); Formula Values: ISBLANK(6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@518cf84a'},
{id: '6', label: 'D4\nTRUE', color: '#31b0d5', title: 'Name: D4<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 6<br>Formula Expression: Formula String: ISBLANK(C4); Formula Values: ISBLANK(); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@518cf84a'},
{id: '7', label: 'C4\n', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 7<br>Formula Expression: Formula String: C4; Formula Values: ; Formula Ptg: ; Ptgs: C4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@518cf84a'},
{id: '8', label: 'ISBLANK\nTRUE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 8<br>Formula Expression: Formula String: ISBLANK(C4); Formula Values: ISBLANK(); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@518cf84a'},
{id: '9', label: 'C5\n#NAME?', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: #NAME?<br>Type: CELL_WITH_FORMULA<br>Id: 9<br>Formula Expression: Formula String: VALUE; Formula Values: #NAME?; Formula Ptg: #NAME?; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@518cf84a'},
{id: '10', label: 'VALUE\n#NAME?', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #NAME?<br>Type: CONSTANT_VALUE<br>Id: 10<br>Formula Expression: Formula String: VALUE; Formula Values: #NAME?; Formula Ptg: #NAME?; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@518cf84a'},
{id: '11', label: 'D5\nFALSE', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 11<br>Formula Expression: Formula String: ISBLANK(D2); Formula Values: ISBLANK(FALSE); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@518cf84a'},
{id: '12', label: 'D2\nFALSE', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 12<br>Formula Expression: Formula String: ISBLANK(A6); Formula Values: ISBLANK(4.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@518cf84a'},
{id: '13', label: 'ISBLANK\nFALSE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 13<br>Formula Expression: Formula String: ISBLANK(D2); Formula Values: ISBLANK(FALSE); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@518cf84a'},
{id: '14', label: 'D6\nFALSE', color: '#31b0d5', title: 'Name: D6<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 14<br>Formula Expression: Formula String: ISBLANK(VALUE); Formula Values: ISBLANK(#REF!); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@518cf84a'},
{id: '15', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 15<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@518cf84a'},
{id: '16', label: 'ISBLANK\nFALSE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 16<br>Formula Expression: Formula String: ISBLANK(VALUE); Formula Values: ISBLANK(#REF!); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@518cf84a'},
{id: '17', label: 'D7\nFALSE', color: '#31b0d5', title: 'Name: D7<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 17<br>Formula Expression: Formula String: ISBLANK(C5); Formula Values: ISBLANK(#NAME?); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@518cf84a'},
{id: '18', label: 'C5\n#NAME?', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: #NAME?<br>Type: CELL_WITH_FORMULA<br>Id: 18<br>Formula Expression: Formula String: VALUE; Formula Values: #NAME?; Formula Ptg: #NAME?; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@518cf84a'},
{id: '19', label: 'ISBLANK\nFALSE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 19<br>Formula Expression: Formula String: ISBLANK(C5); Formula Values: ISBLANK(#NAME?); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@518cf84a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1', to: '2'},
{from: '2', to: '0'},
{from: '4', to: '5'},
{from: '5', to: '3'},
{from: '7', to: '8'},
{from: '8', to: '6'},
{from: '10', to: '9'},
{from: '12', to: '13'},
{from: '13', to: '11'},
{from: '15', to: '16'},
{from: '16', to: '14'},
{from: '18', to: '19'},
{from: '19', to: '17'},
{from: '2', to: '12'},
{from: '10', to: '18'}
                            ]);