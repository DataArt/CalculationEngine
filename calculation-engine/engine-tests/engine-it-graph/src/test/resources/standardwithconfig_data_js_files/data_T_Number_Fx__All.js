var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '800', label: 'D2\nexpected', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: expected<br>Type: CELL_WITH_FORMULA<br>Id: 800<br>Formula Expression: Formula String: IF(A2=C1,B4,B1); Formula Values: IF(Sun = is, expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@66f66866'},
{id: '801', label: 'A2\nSun', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: Sun<br>Type: CELL_WITH_VALUE<br>Id: 801<br>Formula Expression: Formula String: A2; Formula Values: Sun; Formula Ptg: Sun; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@66f66866'},
{id: '802', label: 'C1\nis', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: is<br>Type: CELL_WITH_VALUE<br>Id: 802<br>Formula Expression: Formula String: C1; Formula Values: is; Formula Ptg: is; Ptgs: C1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@66f66866'},
{id: '803', label: '=\nFALSE', color: '#f0ad4e', title: 'Name: =<br>Alias: null<br>Value: FALSE<br>Type: OPERATOR<br>Id: 803<br>Formula Expression: Formula String: A2 = C1; Formula Values: Sun = is; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@66f66866'},
{id: '804', label: 'IF\nexpected', color: '#f0ad4e', title: 'Name: IF<br>Alias: null<br>Value: expected<br>Type: IF<br>Id: 804<br>Formula Expression: Formula String: IF(A2=C1,B4,B1); Formula Values: IF(Sun = is, expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: e62123f2-e0ad-adf8-5ebb-73a25eccfd38'},
{id: '805', label: 'B1\nexpected', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: expected<br>Type: CELL_WITH_VALUE<br>Id: 805<br>Formula Expression: Formula String: B1; Formula Values: expected; Formula Ptg: expected; Ptgs: B1 Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@66f66866'},
{id: '807', label: 'D5\n', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: <br>Type: CELL_WITH_FORMULA<br>Id: 807<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@66f66866'},
{id: '808', label: 'D3\n52.0', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: 52.0<br>Type: CELL_WITH_VALUE<br>Id: 808<br>Formula Expression: Formula String: D3; Formula Values: 52.0; Formula Ptg: 52.0; Ptgs: D3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@66f66866'},
{id: '809', label: 'T\n', color: '#f0ad4e', title: 'Name: T<br>Alias: null<br>Value: <br>Type: FUNCTION<br>Id: 809<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@66f66866'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '805', to: '804'},
{from: '802', to: '803'},
{from: '803', to: '804'},
{from: '808', to: '809'},
{from: '801', to: '803'},
{from: '804', to: '800'},
{from: '809', to: '807'}
                            ]);