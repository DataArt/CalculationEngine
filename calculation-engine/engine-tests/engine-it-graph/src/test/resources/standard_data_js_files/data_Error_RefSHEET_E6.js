var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'eff02238-689f-4f3e-90a9-b77400cb24c1', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: eff02238-689f-4f3e-90a9-b77400cb24c1<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7722c3c3'},
{id: 'cef66fd3-d069-443c-81d4-184e693a1d81', label: '[1]Sheet2!B4\n#REF!', color: '#31b0d5', title: 'Name: [1]Sheet2!B4<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_VALUE<br>Id: cef66fd3-d069-443c-81d4-184e693a1d81<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7722c3c3'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'cef66fd3-d069-443c-81d4-184e693a1d81', to: 'eff02238-689f-4f3e-90a9-b77400cb24c1'}
                            ]);