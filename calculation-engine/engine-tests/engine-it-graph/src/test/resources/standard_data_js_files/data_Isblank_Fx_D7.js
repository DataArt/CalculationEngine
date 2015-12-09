var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '80e1d1ea-4c1a-46a3-8e3d-9afc87dfe38c', label: 'C5\n', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 80e1d1ea-4c1a-46a3-8e3d-9afc87dfe38c<br>Formula Expression: Formula String: C5; Formula Values: ; Formula Ptg: ; Ptgs: C5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3e92efc3'},
{id: 'd478d249-b7e5-433d-b164-ae2c822eac27', label: 'ISBLANK\nTRUE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: d478d249-b7e5-433d-b164-ae2c822eac27<br>Formula Expression: Formula String: ISBLANK(C5); Formula Values: ISBLANK(); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3e92efc3'},
{id: 'eb43d323-6674-4bf4-b25c-ff294b5236fa', label: 'D7\nTRUE', color: '#31b0d5', title: 'Name: D7<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: eb43d323-6674-4bf4-b25c-ff294b5236fa<br>Formula Expression: Formula String: ISBLANK(C5); Formula Values: ISBLANK(); Formula Ptg:  ISBLANK ; Ptgs: C5 ISBLANK  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3e92efc3'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'd478d249-b7e5-433d-b164-ae2c822eac27', to: 'eb43d323-6674-4bf4-b25c-ff294b5236fa'},
{from: '80e1d1ea-4c1a-46a3-8e3d-9afc87dfe38c', to: 'd478d249-b7e5-433d-b164-ae2c822eac27'}
                            ]);