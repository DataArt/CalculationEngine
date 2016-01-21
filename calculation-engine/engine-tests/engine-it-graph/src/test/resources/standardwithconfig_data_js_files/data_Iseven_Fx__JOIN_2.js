var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4257', label: 'D10\nFALSE', color: '#31b0d5', title: 'Name: D10<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 4257<br>Formula Expression: Formula String: ISEVEN(C3); Formula Values: ISEVEN(5.45); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7f08c343'},
{id: '4259', label: 'C3\n5.45', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 5.45<br>Type: CELL_WITH_VALUE<br>Id: 4259<br>Formula Expression: Formula String: C3; Formula Values: 5.45; Formula Ptg: 5.45; Ptgs: C3 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7f08c343'},
{id: '4260', label: 'ISEVEN\nFALSE', color: '#f0ad4e', title: 'Name: ISEVEN<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 4260<br>Formula Expression: Formula String: ISEVEN(C3); Formula Values: ISEVEN(5.45); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7f08c343'},
{id: '4261', label: 'D11\n#VALUE!', color: '#31b0d5', title: 'Name: D11<br>Alias: null<br>Value: #VALUE!<br>Type: CELL_WITH_FORMULA<br>Id: 4261<br>Formula Expression: Formula String: ISEVEN(D1); Formula Values: ISEVEN(qwerty); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7f08c343'},
{id: '4263', label: 'D1\nqwerty', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: qwerty<br>Type: CELL_WITH_VALUE<br>Id: 4263<br>Formula Expression: Formula String: D1; Formula Values: qwerty; Formula Ptg: qwerty; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7f08c343'},
{id: '4264', label: 'ISEVEN\n#VALUE!', color: '#f0ad4e', title: 'Name: ISEVEN<br>Alias: null<br>Value: #VALUE!<br>Type: FUNCTION<br>Id: 4264<br>Formula Expression: Formula String: ISEVEN(D1); Formula Values: ISEVEN(qwerty); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7f08c343'},
{id: '4265', label: 'D12\nTRUE', color: '#31b0d5', title: 'Name: D12<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 4265<br>Formula Expression: Formula String: ISEVEN(D3); Formula Values: ISEVEN(); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7f08c343'},
{id: '4268', label: 'D3\n', color: '#31b0d5', title: 'Name: D3<br>Alias: hjk<br>Value: <br>Type: EMPTY_CELL<br>Id: 4268<br>Formula Expression: Formula String: D3; Formula Values: ; Formula Ptg: ; Ptgs: D3 Index in Ptgs: 0 <br>Source Object Id: null'},
{id: '4269', label: 'ISEVEN\nTRUE', color: '#f0ad4e', title: 'Name: ISEVEN<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 4269<br>Formula Expression: Formula String: ISEVEN(D3); Formula Values: ISEVEN(); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7f08c343'},
{id: '4247', label: 'D7\nFALSE', color: '#31b0d5', title: 'Name: D7<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 4247<br>Formula Expression: Formula String: ISEVEN(A1); Formula Values: ISEVEN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7f08c343'},
{id: '4249', label: 'A1\n1.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 4249<br>Formula Expression: Formula String: A1; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7f08c343'},
{id: '4250', label: 'ISEVEN\nFALSE', color: '#f0ad4e', title: 'Name: ISEVEN<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 4250<br>Formula Expression: Formula String: ISEVEN(A1); Formula Values: ISEVEN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7f08c343'},
{id: '4251', label: 'D8\nTRUE', color: '#31b0d5', title: 'Name: D8<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 4251<br>Formula Expression: Formula String: ISEVEN(A2); Formula Values: ISEVEN(2.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7f08c343'},
{id: '4253', label: 'A2\n2.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_VALUE<br>Id: 4253<br>Formula Expression: Formula String: A2; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7f08c343'},
{id: '4254', label: 'ISEVEN\nTRUE', color: '#f0ad4e', title: 'Name: ISEVEN<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 4254<br>Formula Expression: Formula String: ISEVEN(A2); Formula Values: ISEVEN(2.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7f08c343'},
{id: '4255', label: 'D9\nFALSE', color: '#31b0d5', title: 'Name: D9<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_REFERENCE<br>Id: 4255<br>Formula Expression: Formula String: ISEVEN(A1); Formula Values: ISEVEN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7f08c343'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4249', to: '4250'},
{from: '4253', to: '4254'},
{from: '4259', to: '4260'},
{from: '4263', to: '4264'},
{from: '4268', to: '4269'},
{from: '4247', to: '4255'},
{from: '4250', to: '4247'},
{from: '4254', to: '4251'},
{from: '4260', to: '4257'},
{from: '4264', to: '4261'},
{from: '4269', to: '4265'}
                            ]);