var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'c8f0fd04-decc-4d20-8d75-5f42edc57e7d', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: c8f0fd04-decc-4d20-8d75-5f42edc57e7d<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@55b699ef'},
{id: '33086735-548d-445d-9c32-a2b83ea56f60', label: '[1]Sheet2!B4\n#REF!', color: '#31b0d5', title: 'Name: [1]Sheet2!B4<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_VALUE<br>Id: 33086735-548d-445d-9c32-a2b83ea56f60<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@55b699ef'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '33086735-548d-445d-9c32-a2b83ea56f60', to: 'c8f0fd04-decc-4d20-8d75-5f42edc57e7d'}
                            ]);