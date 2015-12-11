var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'ae86433f-65be-4851-8b0c-adb6557f3bfa', label: 'VALUE\n0.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 0.0<br>Type: CONSTANT_VALUE<br>Id: ae86433f-65be-4851-8b0c-adb6557f3bfa<br>Formula Expression: Formula String: VALUE; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@a9cd3b1'},
{id: 'afb9ea99-beb2-4b60-baa2-d2c6e46a5aba', label: 'B2\n0.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 0.0<br>Type: CELL_WITH_FORMULA<br>Id: afb9ea99-beb2-4b60-baa2-d2c6e46a5aba<br>Formula Expression: Formula String: VALUE; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@a9cd3b1'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ae86433f-65be-4851-8b0c-adb6557f3bfa', to: 'afb9ea99-beb2-4b60-baa2-d2c6e46a5aba'}
                            ]);