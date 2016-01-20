var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'D7\nFALSE', color: '#31b0d5', title: 'Name: D7<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: ISEVEN(A1); Formula Values: ISEVEN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2e488e45'},
{id: '2', label: 'A1\n1.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 2<br>Formula Expression: Formula String: A1; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2e488e45'},
{id: '3', label: 'ISEVEN\nFALSE', color: '#f0ad4e', title: 'Name: ISEVEN<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 3<br>Formula Expression: Formula String: ISEVEN(A1); Formula Values: ISEVEN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2e488e45'},
{id: '4', label: 'D8\nTRUE', color: '#31b0d5', title: 'Name: D8<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 4<br>Formula Expression: Formula String: ISEVEN(A2); Formula Values: ISEVEN(2.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2e488e45'},
{id: '6', label: 'A2\n2.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_VALUE<br>Id: 6<br>Formula Expression: Formula String: A2; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2e488e45'},
{id: '7', label: 'ISEVEN\nTRUE', color: '#f0ad4e', title: 'Name: ISEVEN<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 7<br>Formula Expression: Formula String: ISEVEN(A2); Formula Values: ISEVEN(2.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2e488e45'},
{id: '8', label: 'D9\nFALSE', color: '#31b0d5', title: 'Name: D9<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_REFERENCE<br>Id: 8<br>Formula Expression: Formula String: ISEVEN(A1); Formula Values: ISEVEN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2e488e45'},
{id: '10', label: 'D10\nFALSE', color: '#31b0d5', title: 'Name: D10<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 10<br>Formula Expression: Formula String: ISEVEN(C3); Formula Values: ISEVEN(5.45); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2e488e45'},
{id: '12', label: 'C3\n5.45', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 5.45<br>Type: CELL_WITH_VALUE<br>Id: 12<br>Formula Expression: Formula String: C3; Formula Values: 5.45; Formula Ptg: 5.45; Ptgs: C3 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2e488e45'},
{id: '13', label: 'ISEVEN\nFALSE', color: '#f0ad4e', title: 'Name: ISEVEN<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 13<br>Formula Expression: Formula String: ISEVEN(C3); Formula Values: ISEVEN(5.45); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2e488e45'},
{id: '14', label: 'D11\n#VALUE!', color: '#31b0d5', title: 'Name: D11<br>Alias: null<br>Value: #VALUE!<br>Type: CELL_WITH_FORMULA<br>Id: 14<br>Formula Expression: Formula String: ISEVEN(D1); Formula Values: ISEVEN(qwerty); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2e488e45'},
{id: '16', label: 'D1\nqwerty', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: qwerty<br>Type: CELL_WITH_VALUE<br>Id: 16<br>Formula Expression: Formula String: D1; Formula Values: qwerty; Formula Ptg: qwerty; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2e488e45'},
{id: '17', label: 'ISEVEN\n#VALUE!', color: '#f0ad4e', title: 'Name: ISEVEN<br>Alias: null<br>Value: #VALUE!<br>Type: FUNCTION<br>Id: 17<br>Formula Expression: Formula String: ISEVEN(D1); Formula Values: ISEVEN(qwerty); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2e488e45'},
{id: '18', label: 'D12\nTRUE', color: '#31b0d5', title: 'Name: D12<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 18<br>Formula Expression: Formula String: ISEVEN(D3); Formula Values: ISEVEN(); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2e488e45'},
{id: '21', label: 'D3\n', color: '#31b0d5', title: 'Name: D3<br>Alias: hjk<br>Value: <br>Type: EMPTY_CELL<br>Id: 21<br>Formula Expression: Formula String: D3; Formula Values: ; Formula Ptg: ; Ptgs: D3 Index in Ptgs: 0 <br>Source Object Id: null'},
{id: '22', label: 'ISEVEN\nTRUE', color: '#f0ad4e', title: 'Name: ISEVEN<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 22<br>Formula Expression: Formula String: ISEVEN(D3); Formula Values: ISEVEN(); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2e488e45'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2', to: '3'},
{from: '6', to: '7'},
{from: '12', to: '13'},
{from: '16', to: '17'},
{from: '21', to: '22'},
{from: '0', to: '8'},
{from: '22', to: '18'},
{from: '3', to: '0'},
{from: '7', to: '4'},
{from: '13', to: '10'},
{from: '17', to: '14'}
                            ]);