var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2021', label: 'D2\nFALSE', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 2021<br>Formula Expression: Formula String: ISBLANK(A6); Formula Values: ISBLANK(4.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@52b959df'},
{id: '2022', label: 'A6\n4.0', color: '#31b0d5', title: 'Name: A6<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 2022<br>Formula Expression: Formula String: A6; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: A6 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@52b959df'},
{id: '2023', label: 'ISBLANK\nFALSE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 2023<br>Formula Expression: Formula String: ISBLANK(A6); Formula Values: ISBLANK(4.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@52b959df'},
{id: '2024', label: 'D3\nFALSE', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 2024<br>Formula Expression: Formula String: ISBLANK(VALUE); Formula Values: ISBLANK(6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@52b959df'},
{id: '2025', label: 'VALUE\n6.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 6.0<br>Type: CONSTANT_VALUE<br>Id: 2025<br>Formula Expression: Formula String: VALUE; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@52b959df'},
{id: '2026', label: 'ISBLANK\nFALSE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 2026<br>Formula Expression: Formula String: ISBLANK(VALUE); Formula Values: ISBLANK(6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@52b959df'},
{id: '2027', label: 'D4\nTRUE', color: '#31b0d5', title: 'Name: D4<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 2027<br>Formula Expression: Formula String: ISBLANK(C4); Formula Values: ISBLANK(); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@52b959df'},
{id: '2028', label: 'C4\n', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 2028<br>Formula Expression: Formula String: C4; Formula Values: ; Formula Ptg: ; Ptgs: C4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@52b959df'},
{id: '2029', label: 'ISBLANK\nTRUE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 2029<br>Formula Expression: Formula String: ISBLANK(C4); Formula Values: ISBLANK(); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@52b959df'},
{id: '2030', label: 'C5\n#NAME?', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: #NAME?<br>Type: CELL_WITH_REFERENCE<br>Id: 2030<br>Formula Expression: Formula String: VALUE; Formula Values: #NAME?; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@52b959df'},
{id: '2031', label: 'VALUE\n#NAME?', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #NAME?<br>Type: CONSTANT_VALUE<br>Id: 2031<br>Formula Expression: Formula String: VALUE; Formula Values: #NAME?; Formula Ptg: #NAME?; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@52b959df'},
{id: '2032', label: 'D5\nFALSE', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 2032<br>Formula Expression: Formula String: ISBLANK(ISBLANK(A6)); Formula Values: ISBLANK(ISBLANK(4.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@52b959df'},
{id: '2033', label: 'D2\nFALSE', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 2033<br>Formula Expression: Formula String: ISBLANK(A6); Formula Values: ISBLANK(4.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@52b959df'},
{id: '2034', label: 'ISBLANK\nFALSE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 2034<br>Formula Expression: Formula String: ISBLANK(ISBLANK(A6)); Formula Values: ISBLANK(ISBLANK(4.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@52b959df'},
{id: '2035', label: 'D6\nFALSE', color: '#31b0d5', title: 'Name: D6<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 2035<br>Formula Expression: Formula String: ISBLANK(VALUE); Formula Values: ISBLANK(#REF!); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@52b959df'},
{id: '2036', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 2036<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@52b959df'},
{id: '2037', label: 'ISBLANK\nFALSE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 2037<br>Formula Expression: Formula String: ISBLANK(VALUE); Formula Values: ISBLANK(#REF!); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@52b959df'},
{id: '2038', label: 'D7\nFALSE', color: '#31b0d5', title: 'Name: D7<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 2038<br>Formula Expression: Formula String: ISBLANK(VALUE); Formula Values: ISBLANK(#NAME?); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@52b959df'},
{id: '2039', label: 'C5\n#NAME?', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: #NAME?<br>Type: CELL_WITH_REFERENCE<br>Id: 2039<br>Formula Expression: Formula String: VALUE; Formula Values: #NAME?; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@52b959df'},
{id: '2040', label: 'ISBLANK\nFALSE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 2040<br>Formula Expression: Formula String: ISBLANK(VALUE); Formula Values: ISBLANK(#NAME?); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@52b959df'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2031', to: '2030'},
{from: '2022', to: '2023'},
{from: '2025', to: '2026'},
{from: '2028', to: '2029'},
{from: '2033', to: '2034'},
{from: '2036', to: '2037'},
{from: '2039', to: '2040'},
{from: '2031', to: '2039'},
{from: '2023', to: '2033'},
{from: '2023', to: '2021'},
{from: '2026', to: '2024'},
{from: '2029', to: '2027'},
{from: '2034', to: '2032'},
{from: '2037', to: '2035'},
{from: '2040', to: '2038'}
                            ]);