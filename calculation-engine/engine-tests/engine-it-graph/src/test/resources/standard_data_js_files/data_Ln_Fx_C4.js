var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '476', label: 'C4\n3.000000153185454', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: 3.000000153185454<br>Type: CELL_WITH_FORMULA<br>Id: 476<br>Formula Expression: Formula String: LN(VALUE); Formula Values: LN(20.08554); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b7d1df8'},
{id: '477', label: 'VALUE\n20.08554', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 20.08554<br>Type: CONSTANT_VALUE<br>Id: 477<br>Formula Expression: Formula String: VALUE; Formula Values: 20.08554; Formula Ptg: 20.08554; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b7d1df8'},
{id: '478', label: 'LN\n3.000000153185454', color: '#f0ad4e', title: 'Name: LN<br>Alias: null<br>Value: 3.000000153185454<br>Type: FUNCTION<br>Id: 478<br>Formula Expression: Formula String: LN(VALUE); Formula Values: LN(20.08554); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6b7d1df8'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '477', to: '478'},
{from: '478', to: '476'}
                            ]);