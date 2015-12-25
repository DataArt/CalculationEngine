var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '54e4cd41-2ee6-4523-a569-71483f13e3fb', label: 'D5\n9.0', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 54e4cd41-2ee6-4523-a569-71483f13e3fb<br>Formula Expression: Formula String: D5; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: D5 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@384ad17b'},
{id: 'd3108128-8fd6-4b6c-81a5-21d952a7f5a4', label: ',\n[9.0, 7.0]', color: '#f0ad4e', title: 'Name: ,<br>Alias: null<br>Value: [9.0, 7.0]<br>Type: FUNCTION<br>Id: d3108128-8fd6-4b6c-81a5-21d952a7f5a4<br>Formula Expression: Formula String: A5 , D5; Formula Values: 7.0 , 9.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: null'},
{id: 'da9f71c0-e8d3-453e-8030-c421fafe16fd', label: 'E5\n[9.0, 7.0]', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: [9.0, 7.0]<br>Type: CELL_WITH_FORMULA<br>Id: da9f71c0-e8d3-453e-8030-c421fafe16fd<br>Formula Expression: Formula String: A5 , D5; Formula Values: 7.0 , 9.0; Formula Ptg: 7.0 9.0 ,; Ptgs: A5 D5 , Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@384ad17b'},
{id: '0d9ba8b4-01ce-4904-8d0f-d0d6f29a144a', label: 'A5\n7.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 0d9ba8b4-01ce-4904-8d0f-d0d6f29a144a<br>Formula Expression: Formula String: A5; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A5 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@384ad17b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '54e4cd41-2ee6-4523-a569-71483f13e3fb', to: 'd3108128-8fd6-4b6c-81a5-21d952a7f5a4'},
{from: 'd3108128-8fd6-4b6c-81a5-21d952a7f5a4', to: 'da9f71c0-e8d3-453e-8030-c421fafe16fd'},
{from: '0d9ba8b4-01ce-4904-8d0f-d0d6f29a144a', to: 'd3108128-8fd6-4b6c-81a5-21d952a7f5a4'}
                            ]);