var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '8877d45d-5422-47a0-b79f-b34027fa659a', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: 8877d45d-5422-47a0-b79f-b34027fa659a<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@74e52303'},
{id: 'e5911cd7-f6b7-4fc7-b862-d81b3bb295f8', label: '[1]Sheet2!B4\n#REF!', color: '#31b0d5', title: 'Name: [1]Sheet2!B4<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_VALUE<br>Id: e5911cd7-f6b7-4fc7-b862-d81b3bb295f8<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@74e52303'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'e5911cd7-f6b7-4fc7-b862-d81b3bb295f8', to: '8877d45d-5422-47a0-b79f-b34027fa659a'}
                            ]);