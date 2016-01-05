var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'e49ea54c-03d9-42e6-a97b-2cbbe0735d79', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: e49ea54c-03d9-42e6-a97b-2cbbe0735d79<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7722c3c3'},
{id: '9ba21483-2d7f-41e2-b21e-fd25ea225901', label: '[1]Sheet2!B4\n#REF!', color: '#31b0d5', title: 'Name: [1]Sheet2!B4<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_VALUE<br>Id: 9ba21483-2d7f-41e2-b21e-fd25ea225901<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7722c3c3'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '9ba21483-2d7f-41e2-b21e-fd25ea225901', to: 'e49ea54c-03d9-42e6-a97b-2cbbe0735d79'}
                            ]);