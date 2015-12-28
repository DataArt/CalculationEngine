var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '22d57a0a-7b5c-4fa5-b410-c0fcfc4b7f02', label: 'D5\n9.0', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 22d57a0a-7b5c-4fa5-b410-c0fcfc4b7f02<br>Formula Expression: Formula String: D5; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: D5 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6d763516'},
{id: '3e6e1983-e7f6-4a42-a69f-bb02a4fa5a3a', label: ',\n[9.0, 7.0]', color: '#f0ad4e', title: 'Name: ,<br>Alias: null<br>Value: [9.0, 7.0]<br>Type: FUNCTION<br>Id: 3e6e1983-e7f6-4a42-a69f-bb02a4fa5a3a<br>Formula Expression: Formula String: A5 , D5; Formula Values: 7.0 , 9.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: null'},
{id: 'a043a339-2b60-4652-8713-58c64f924a8b', label: 'E5\n[9.0, 7.0]', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: [9.0, 7.0]<br>Type: CELL_WITH_FORMULA<br>Id: a043a339-2b60-4652-8713-58c64f924a8b<br>Formula Expression: Formula String: A5 , D5; Formula Values: 7.0 , 9.0; Formula Ptg: 7.0 9.0 ,; Ptgs: A5 D5 , Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6d763516'},
{id: 'de46713a-4fcb-4660-9562-b2ea4edb02d9', label: 'A5\n7.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: de46713a-4fcb-4660-9562-b2ea4edb02d9<br>Formula Expression: Formula String: A5; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A5 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6d763516'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'de46713a-4fcb-4660-9562-b2ea4edb02d9', to: '3e6e1983-e7f6-4a42-a69f-bb02a4fa5a3a'},
{from: '3e6e1983-e7f6-4a42-a69f-bb02a4fa5a3a', to: 'a043a339-2b60-4652-8713-58c64f924a8b'},
{from: '22d57a0a-7b5c-4fa5-b410-c0fcfc4b7f02', to: '3e6e1983-e7f6-4a42-a69f-bb02a4fa5a3a'}
                            ]);