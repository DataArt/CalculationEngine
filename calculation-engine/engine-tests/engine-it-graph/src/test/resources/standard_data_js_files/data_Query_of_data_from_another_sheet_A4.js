var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '6a8aba7f-fdd1-447b-a400-abdc160fd4e5', label: 'C1\n5.0', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 6a8aba7f-fdd1-447b-a400-abdc160fd4e5<br>Formula Expression: Formula String: C1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: C1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c33b74f'},
{id: '738e9ca9-1386-4073-a6f7-acc743395116', label: 'A4\n#REF!', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: 738e9ca9-1386-4073-a6f7-acc743395116<br>Formula Expression: Formula String: A1 + C1 + Sheet2!$B$1; Formula Values: 20.0 + 5.0 + #REF!; Formula Ptg: 20.0 5.0 + #REF! +; Ptgs: A1 C1 + Sheet2!$B$1 + Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c33b74f'},
{id: '9be17305-cc11-4ef1-9601-80f48fc25653', label: 'Sheet2!$B$1\n#REF!', color: '#31b0d5', title: 'Name: Sheet2!$B$1<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_VALUE<br>Id: 9be17305-cc11-4ef1-9601-80f48fc25653<br>Formula Expression: Formula String: Sheet2!$B$1; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: Sheet2!$B$1 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c33b74f'},
{id: '1b1639de-593f-429d-b8d6-a090322f8023', label: '+\n#REF!', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: #REF!<br>Type: OPERATOR<br>Id: 1b1639de-593f-429d-b8d6-a090322f8023<br>Formula Expression: Formula String: A1 + C1 + Sheet2!$B$1; Formula Values: 20.0 + 5.0 + #REF!; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c33b74f'},
{id: '100ba459-2fd7-4b70-aa24-d3c53ad9757e', label: '+\n25.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 25.0<br>Type: OPERATOR<br>Id: 100ba459-2fd7-4b70-aa24-d3c53ad9757e<br>Formula Expression: Formula String: A1 + C1; Formula Values: 20.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c33b74f'},
{id: 'c2f3a959-98ee-4358-be97-6b561ef759db', label: 'A1\n20.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: c2f3a959-98ee-4358-be97-6b561ef759db<br>Formula Expression: Formula String: A1; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c33b74f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '100ba459-2fd7-4b70-aa24-d3c53ad9757e', to: '1b1639de-593f-429d-b8d6-a090322f8023'},
{from: '9be17305-cc11-4ef1-9601-80f48fc25653', to: '1b1639de-593f-429d-b8d6-a090322f8023'},
{from: '6a8aba7f-fdd1-447b-a400-abdc160fd4e5', to: '100ba459-2fd7-4b70-aa24-d3c53ad9757e'},
{from: 'c2f3a959-98ee-4358-be97-6b561ef759db', to: '100ba459-2fd7-4b70-aa24-d3c53ad9757e'},
{from: '1b1639de-593f-429d-b8d6-a090322f8023', to: '738e9ca9-1386-4073-a6f7-acc743395116'}
                            ]);