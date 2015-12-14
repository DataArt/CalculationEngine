var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '9fd72c79-6aaf-459a-9e21-a187d5c60644', label: 'VALUE\n#NAME?', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #NAME?<br>Type: CONSTANT_VALUE<br>Id: 9fd72c79-6aaf-459a-9e21-a187d5c60644<br>Formula Expression: Formula String: VALUE; Formula Values: #NAME?; Formula Ptg: #NAME?; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f197a46'},
{id: '3e5ca315-0ca3-427d-b08d-0afeb173d9c4', label: 'D9\nTRUE', color: '#31b0d5', title: 'Name: D9<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 3e5ca315-0ca3-427d-b08d-0afeb173d9c4<br>Formula Expression: Formula String: ISERROR(SUM(VALUE, C2, C1)); Formula Values: ISERROR(SUM(#NAME?, 5.0, 7.0)); Formula Ptg: #NAME?, 5.0, 7.0 SUM  ISERROR ; Ptgs: VALUE, C2, C1 SUM  ISERROR  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f197a46'},
{id: '6988590a-038e-4c0c-9575-3cf8e9e397fc', label: 'C1\n7.0', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 6988590a-038e-4c0c-9575-3cf8e9e397fc<br>Formula Expression: Formula String: C1; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: C1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f197a46'},
{id: 'c85fa92f-7883-4ab4-b2b7-52df4cd7db35', label: 'D1\n#NAME?', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: #NAME?<br>Type: CELL_WITH_FORMULA<br>Id: c85fa92f-7883-4ab4-b2b7-52df4cd7db35<br>Formula Expression: Formula String: SUM(VALUE, C2, C1); Formula Values: SUM(#NAME?, 5.0, 7.0); Formula Ptg: #NAME?, 5.0, 7.0 SUM ; Ptgs: VALUE, C2, C1 SUM  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f197a46'},
{id: 'd08a87bb-049e-4983-927e-96f6c72d8e65', label: 'D3\n#NAME?', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: #NAME?<br>Type: CELL_WITH_REFERENCE<br>Id: d08a87bb-049e-4983-927e-96f6c72d8e65<br>Formula Expression: Formula String: VALUE; Formula Values: #NAME?; Formula Ptg: #NAME?; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f197a46'},
{id: '9dc4db7a-5380-4129-9af8-b596b76987ff', label: 'SUM\n#NAME?', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: #NAME?<br>Type: FUNCTION<br>Id: 9dc4db7a-5380-4129-9af8-b596b76987ff<br>Formula Expression: Formula String: SUM(VALUE, C2, C1); Formula Values: SUM(#NAME?, 5.0, 7.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f197a46'},
{id: 'b9792e96-c1af-49f1-a712-a755fa7439ae', label: 'ISERROR\nTRUE', color: '#f0ad4e', title: 'Name: ISERROR<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: b9792e96-c1af-49f1-a712-a755fa7439ae<br>Formula Expression: Formula String: ISERROR(SUM(VALUE, C2, C1)); Formula Values: ISERROR(SUM(#NAME?, 5.0, 7.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f197a46'},
{id: '2c9d486b-951f-4feb-b0d6-661d3f2c8829', label: 'C2\n5.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 2c9d486b-951f-4feb-b0d6-661d3f2c8829<br>Formula Expression: Formula String: C2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: C2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f197a46'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'c85fa92f-7883-4ab4-b2b7-52df4cd7db35', to: 'b9792e96-c1af-49f1-a712-a755fa7439ae'},
{from: '2c9d486b-951f-4feb-b0d6-661d3f2c8829', to: '9dc4db7a-5380-4129-9af8-b596b76987ff'},
{from: 'b9792e96-c1af-49f1-a712-a755fa7439ae', to: '3e5ca315-0ca3-427d-b08d-0afeb173d9c4'},
{from: '9dc4db7a-5380-4129-9af8-b596b76987ff', to: 'c85fa92f-7883-4ab4-b2b7-52df4cd7db35'},
{from: '9fd72c79-6aaf-459a-9e21-a187d5c60644', to: 'd08a87bb-049e-4983-927e-96f6c72d8e65'},
{from: '6988590a-038e-4c0c-9575-3cf8e9e397fc', to: '9dc4db7a-5380-4129-9af8-b596b76987ff'},
{from: 'd08a87bb-049e-4983-927e-96f6c72d8e65', to: '9dc4db7a-5380-4129-9af8-b596b76987ff'}
                            ]);