var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'bbe25596-b74f-468b-9cb9-954e1a09c2d4', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: bbe25596-b74f-468b-9cb9-954e1a09c2d4<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5fe94a96'},
{id: 'a0d33cd2-7958-4171-8a00-e6189d789bc7', label: '[1]Sheet2!B4\n#REF!', color: '#31b0d5', title: 'Name: [1]Sheet2!B4<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_VALUE<br>Id: a0d33cd2-7958-4171-8a00-e6189d789bc7<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5fe94a96'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'a0d33cd2-7958-4171-8a00-e6189d789bc7', to: 'bbe25596-b74f-468b-9cb9-954e1a09c2d4'}
                            ]);