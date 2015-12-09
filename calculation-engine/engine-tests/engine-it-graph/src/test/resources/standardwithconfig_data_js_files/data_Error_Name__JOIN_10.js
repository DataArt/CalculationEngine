var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '910d4041-f862-4508-8ca7-89abed495ed7', label: 'A2\n', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 910d4041-f862-4508-8ca7-89abed495ed7<br>Formula Expression: Formula String: A2; Formula Values: ; Formula Ptg: ; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@61862a7f'},
{id: 'cd1b9608-0206-495b-8e8e-37c665f9af71', label: 'CONCATENATE\n', color: '#f0ad4e', title: 'Name: CONCATENATE<br>Alias: null<br>Value: <br>Type: FUNCTION<br>Id: cd1b9608-0206-495b-8e8e-37c665f9af71<br>Formula Expression: Formula String: CONCATENATE(A2, A1); Formula Values: CONCATENATE(, ); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@61862a7f'},
{id: '84441add-91ee-47c0-abd8-4c3e91994b6c', label: 'B2\n', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: <br>Type: CELL_WITH_FORMULA<br>Id: 84441add-91ee-47c0-abd8-4c3e91994b6c<br>Formula Expression: Formula String: CONCATENATE(A2, A1); Formula Values: CONCATENATE(, ); Formula Ptg: ,  CONCATENATE ; Ptgs: A2, A1 CONCATENATE  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@61862a7f'},
{id: '769354f8-89a7-4ea3-a71f-eeef372b8b59', label: 'A1\n', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 769354f8-89a7-4ea3-a71f-eeef372b8b59<br>Formula Expression: Formula String: A1; Formula Values: ; Formula Ptg: ; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@61862a7f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'cd1b9608-0206-495b-8e8e-37c665f9af71', to: '84441add-91ee-47c0-abd8-4c3e91994b6c'},
{from: '910d4041-f862-4508-8ca7-89abed495ed7', to: 'cd1b9608-0206-495b-8e8e-37c665f9af71'},
{from: '769354f8-89a7-4ea3-a71f-eeef372b8b59', to: 'cd1b9608-0206-495b-8e8e-37c665f9af71'}
                            ]);