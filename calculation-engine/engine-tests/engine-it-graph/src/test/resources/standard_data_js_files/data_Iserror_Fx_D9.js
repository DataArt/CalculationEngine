var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '32849408-c06c-466f-b219-190692e3303f', label: 'ISERROR\nFALSE', color: '#f0ad4e', title: 'Name: ISERROR<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 32849408-c06c-466f-b219-190692e3303f<br>Formula Expression: Formula String: ISERROR(SUM(VALUE, C2, C1)); Formula Values: ISERROR(SUM(0.0, 5.0, 7.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@353d0772'},
{id: '522c1716-d6b2-458c-8008-647f8dd782fd', label: 'SUM\n12.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 12.0<br>Type: FUNCTION<br>Id: 522c1716-d6b2-458c-8008-647f8dd782fd<br>Formula Expression: Formula String: SUM(VALUE, C2, C1); Formula Values: SUM(0.0, 5.0, 7.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@353d0772'},
{id: '29b5bb00-2806-4bc7-8a7f-e93a19a1dc4e', label: 'D9\nFALSE', color: '#31b0d5', title: 'Name: D9<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 29b5bb00-2806-4bc7-8a7f-e93a19a1dc4e<br>Formula Expression: Formula String: ISERROR(SUM(VALUE, C2, C1)); Formula Values: ISERROR(SUM(0.0, 5.0, 7.0)); Formula Ptg: 0.0, 5.0, 7.0 SUM  ISERROR ; Ptgs: VALUE, C2, C1 SUM  ISERROR  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@353d0772'},
{id: 'f210be1a-7f84-4d3c-bfde-36871a8047f6', label: 'C1\n7.0', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: f210be1a-7f84-4d3c-bfde-36871a8047f6<br>Formula Expression: Formula String: C1; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: C1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@353d0772'},
{id: '18b45a89-4d78-4480-8efb-adf7b5ce91e3', label: 'C2\n5.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 18b45a89-4d78-4480-8efb-adf7b5ce91e3<br>Formula Expression: Formula String: C2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: C2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@353d0772'},
{id: '3d488ac4-9f22-4ee7-a6f1-c86d0a23ba21', label: 'VALUE\n0.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 0.0<br>Type: CONSTANT_VALUE<br>Id: 3d488ac4-9f22-4ee7-a6f1-c86d0a23ba21<br>Formula Expression: Formula String: VALUE; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@353d0772'},
{id: '2f345281-f13b-4dde-bc2e-03122a020fcd', label: 'D1\n12.0', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: 2f345281-f13b-4dde-bc2e-03122a020fcd<br>Formula Expression: Formula String: SUM(VALUE, C2, C1); Formula Values: SUM(0.0, 5.0, 7.0); Formula Ptg: 0.0, 5.0, 7.0 SUM ; Ptgs: VALUE, C2, C1 SUM  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@353d0772'},
{id: '3d0b7b0e-b60b-480e-bfe5-bc0d364baee9', label: 'D3\n0.0', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: 0.0<br>Type: CELL_WITH_REFERENCE<br>Id: 3d0b7b0e-b60b-480e-bfe5-bc0d364baee9<br>Formula Expression: Formula String: VALUE; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@353d0772'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2f345281-f13b-4dde-bc2e-03122a020fcd', to: '32849408-c06c-466f-b219-190692e3303f'},
{from: '3d488ac4-9f22-4ee7-a6f1-c86d0a23ba21', to: '3d0b7b0e-b60b-480e-bfe5-bc0d364baee9'},
{from: '32849408-c06c-466f-b219-190692e3303f', to: '29b5bb00-2806-4bc7-8a7f-e93a19a1dc4e'},
{from: 'f210be1a-7f84-4d3c-bfde-36871a8047f6', to: '522c1716-d6b2-458c-8008-647f8dd782fd'},
{from: '18b45a89-4d78-4480-8efb-adf7b5ce91e3', to: '522c1716-d6b2-458c-8008-647f8dd782fd'},
{from: '522c1716-d6b2-458c-8008-647f8dd782fd', to: '2f345281-f13b-4dde-bc2e-03122a020fcd'},
{from: '3d0b7b0e-b60b-480e-bfe5-bc0d364baee9', to: '522c1716-d6b2-458c-8008-647f8dd782fd'}
                            ]);