var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'e291dd22-080b-4cb3-aaef-e8a512619a41', label: 'A4\n4.5', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 4.5<br>Type: CELL_WITH_VALUE<br>Id: e291dd22-080b-4cb3-aaef-e8a512619a41<br>Formula Expression: Formula String: A4; Formula Values: 4.5; Formula Ptg: 4.5; Ptgs: A4 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@385e9564'},
{id: '7fbcc6ed-5907-49f1-a300-7f670439795d', label: '-\n6.875', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 6.875<br>Type: OPERATOR<br>Id: 7fbcc6ed-5907-49f1-a300-7f670439795d<br>Formula Expression: Formula String: SUM(VALUE, A4, A2) - AVERAGE(VALUE) - SUM(Sheet1!$A$3, Sheet1!$A$2); Formula Values: SUM(12.9, 4.5, 12.6) - AVERAGE(12.6, 3.2, 4.5, 9.0) - SUM(3.2, 12.6); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@385e9564'},
{id: '5365e07d-9da4-4649-a830-5d5ee8e494b4', label: 'SUM\n30.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 30.0<br>Type: FUNCTION<br>Id: 5365e07d-9da4-4649-a830-5d5ee8e494b4<br>Formula Expression: Formula String: SUM(VALUE, A4, A2); Formula Values: SUM(12.9, 4.5, 12.6); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@385e9564'},
{id: '53de2cb4-7705-456d-a271-d580e4cc17a4', label: 'E5\n6.875', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 6.875<br>Type: CELL_WITH_FORMULA<br>Id: 53de2cb4-7705-456d-a271-d580e4cc17a4<br>Formula Expression: Formula String: SUM(VALUE, A4, A2) - AVERAGE(VALUE) - SUM(Sheet1!$A$3, Sheet1!$A$2); Formula Values: SUM(12.9, 4.5, 12.6) - AVERAGE(12.6, 3.2, 4.5, 9.0) - SUM(3.2, 12.6); Formula Ptg: 12.9, 4.5, 12.6 SUM  12.6, 3.2, 4.5, 9.0 AVERAGE  - 3.2, 12.6 SUM  -; Ptgs: VALUE, A4, A2 SUM  VALUE AVERAGE  - Sheet1!$A$3, Sheet1!$A$2 SUM  - Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@385e9564'},
{id: '2c010fe6-1929-4c32-a7e9-6652356d0368', label: 'VALUE\n[[12.6], [3.2], [4.5], [9.0]]', color: '#31b0d5', title: 'Name: VALUE<br>Alias: My_Grades<br>Value: [[12.6], [3.2], [4.5], [9.0]]<br>Type: CONSTANT_VALUE<br>Id: 2c010fe6-1929-4c32-a7e9-6652356d0368<br>Formula Expression: Formula String: VALUE; Formula Values: [[12.6], [3.2], [4.5], [9.0]]; Formula Ptg: [[12.6], [3.2], [4.5], [9.0]]; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@385e9564'},
{id: 'b6b3880b-7f93-47ee-ab52-439a64f95f4d', label: 'C4\n15.8', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: 15.8<br>Type: CELL_WITH_FORMULA<br>Id: b6b3880b-7f93-47ee-ab52-439a64f95f4d<br>Formula Expression: Formula String: SUM(Sheet1!$A$3, Sheet1!$A$2); Formula Values: SUM(3.2, 12.6); Formula Ptg: 3.2, 12.6 SUM ; Ptgs: Sheet1!$A$3, Sheet1!$A$2 SUM  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@385e9564'},
{id: '9e17db98-4cb4-49b2-968b-01457bcf6d33', label: 'C2\n30.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 30.0<br>Type: CELL_WITH_FORMULA<br>Id: 9e17db98-4cb4-49b2-968b-01457bcf6d33<br>Formula Expression: Formula String: SUM(VALUE, A4, A2); Formula Values: SUM(12.9, 4.5, 12.6); Formula Ptg: 12.9, 4.5, 12.6 SUM ; Ptgs: VALUE, A4, A2 SUM  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@385e9564'},
{id: '1c613fc8-e720-47f4-a4b7-d35b5ecdad29', label: 'C3\n7.325', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 7.325<br>Type: CELL_WITH_FORMULA<br>Id: 1c613fc8-e720-47f4-a4b7-d35b5ecdad29<br>Formula Expression: Formula String: AVERAGE(VALUE); Formula Values: AVERAGE(12.6, 3.2, 4.5, 9.0); Formula Ptg: 12.6, 3.2, 4.5, 9.0 AVERAGE ; Ptgs: VALUE AVERAGE  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@385e9564'},
{id: '8b4fe9fb-ed05-48ab-b6c0-59e9756f2240', label: 'SUM\n15.8', color: '#f0ad4e', title: 'Name: SUM<br>Alias: My_Function<br>Value: 15.8<br>Type: FUNCTION<br>Id: 8b4fe9fb-ed05-48ab-b6c0-59e9756f2240<br>Formula Expression: Formula String: SUM(Sheet1!$A$3, Sheet1!$A$2); Formula Values: SUM(3.2, 12.6); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@385e9564'},
{id: '3c1c2210-17f8-4ebf-8a99-f86dd259efb4', label: 'AVERAGE\n7.325', color: '#f0ad4e', title: 'Name: AVERAGE<br>Alias: null<br>Value: 7.325<br>Type: FUNCTION<br>Id: 3c1c2210-17f8-4ebf-8a99-f86dd259efb4<br>Formula Expression: Formula String: AVERAGE(VALUE); Formula Values: AVERAGE(12.6, 3.2, 4.5, 9.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@385e9564'},
{id: '38cf3f0e-b340-4209-b799-b3dd35d0d902', label: 'Sheet1!$A$2\n12.6', color: '#31b0d5', title: 'Name: Sheet1!$A$2<br>Alias: null<br>Value: 12.6<br>Type: CELL_WITH_VALUE<br>Id: 38cf3f0e-b340-4209-b799-b3dd35d0d902<br>Formula Expression: Formula String: Sheet1!$A$2; Formula Values: 12.6; Formula Ptg: 12.6; Ptgs: Sheet1!$A$2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@385e9564'},
{id: 'a97f6bc3-f26a-437f-b814-5f0615d28d21', label: 'SUM\n15.8', color: '#f0ad4e', title: 'Name: SUM<br>Alias: My_Function<br>Value: 15.8<br>Type: FUNCTION<br>Id: a97f6bc3-f26a-437f-b814-5f0615d28d21<br>Formula Expression: Formula String: SUM(Sheet1!$A$3, Sheet1!$A$2); Formula Values: SUM(3.2, 12.6); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@385e9564'},
{id: '6b2d9e03-e192-4c0c-ad5a-67316606b1fa', label: 'A2\n12.6', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 12.6<br>Type: CELL_WITH_VALUE<br>Id: 6b2d9e03-e192-4c0c-ad5a-67316606b1fa<br>Formula Expression: Formula String: A2; Formula Values: 12.6; Formula Ptg: 12.6; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@385e9564'},
{id: '896608ab-e885-4db9-800d-5b06f8bb5b7f', label: '-\n22.675', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 22.675<br>Type: OPERATOR<br>Id: 896608ab-e885-4db9-800d-5b06f8bb5b7f<br>Formula Expression: Formula String: SUM(VALUE, A4, A2) - AVERAGE(VALUE); Formula Values: SUM(12.9, 4.5, 12.6) - AVERAGE(12.6, 3.2, 4.5, 9.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@385e9564'},
{id: '5aa645db-6806-4d48-8b25-50a419f60b39', label: 'Sheet1!$A$2\n12.6', color: '#31b0d5', title: 'Name: Sheet1!$A$2<br>Alias: null<br>Value: 12.6<br>Type: CELL_WITH_VALUE<br>Id: 5aa645db-6806-4d48-8b25-50a419f60b39<br>Formula Expression: Formula String: Sheet1!$A$2; Formula Values: 12.6; Formula Ptg: 12.6; Ptgs: Sheet1!$A$2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@385e9564'},
{id: 'a14a4fe4-ba22-4643-8363-947eb4dbe561', label: 'Sheet1!$A$3\n3.2', color: '#31b0d5', title: 'Name: Sheet1!$A$3<br>Alias: null<br>Value: 3.2<br>Type: CELL_WITH_VALUE<br>Id: a14a4fe4-ba22-4643-8363-947eb4dbe561<br>Formula Expression: Formula String: Sheet1!$A$3; Formula Values: 3.2; Formula Ptg: 3.2; Ptgs: Sheet1!$A$3 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@385e9564'},
{id: '8d939922-e529-4b5a-8d03-f8b7b52d9df3', label: 'C3\n7.325', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 7.325<br>Type: CELL_WITH_FORMULA<br>Id: 8d939922-e529-4b5a-8d03-f8b7b52d9df3<br>Formula Expression: Formula String: AVERAGE(VALUE); Formula Values: AVERAGE(12.6, 3.2, 4.5, 9.0); Formula Ptg: 12.6, 3.2, 4.5, 9.0 AVERAGE ; Ptgs: VALUE AVERAGE  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@385e9564'},
{id: '94912127-58c6-45cd-8015-f074af5be053', label: 'VALUE\n12.9', color: '#31b0d5', title: 'Name: VALUE<br>Alias: Coef_One<br>Value: 12.9<br>Type: CONSTANT_VALUE<br>Id: 94912127-58c6-45cd-8015-f074af5be053<br>Formula Expression: Formula String: VALUE; Formula Values: 12.9; Formula Ptg: 12.9; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@385e9564'},
{id: '64229e08-c15e-41d1-ab76-77e30ac38b9c', label: 'Sheet1!$A$3\n3.2', color: '#31b0d5', title: 'Name: Sheet1!$A$3<br>Alias: null<br>Value: 3.2<br>Type: CELL_WITH_VALUE<br>Id: 64229e08-c15e-41d1-ab76-77e30ac38b9c<br>Formula Expression: Formula String: Sheet1!$A$3; Formula Values: 3.2; Formula Ptg: 3.2; Ptgs: Sheet1!$A$3 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@385e9564'},
{id: '2d1d46dd-44e2-42f8-9ab9-872ecf0e7818', label: 'C2\n30.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 30.0<br>Type: CELL_WITH_FORMULA<br>Id: 2d1d46dd-44e2-42f8-9ab9-872ecf0e7818<br>Formula Expression: Formula String: SUM(VALUE, A4, A2); Formula Values: SUM(12.9, 4.5, 12.6); Formula Ptg: 12.9, 4.5, 12.6 SUM ; Ptgs: VALUE, A4, A2 SUM  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@385e9564'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5aa645db-6806-4d48-8b25-50a419f60b39', to: '8b4fe9fb-ed05-48ab-b6c0-59e9756f2240'},
{from: '3c1c2210-17f8-4ebf-8a99-f86dd259efb4', to: '1c613fc8-e720-47f4-a4b7-d35b5ecdad29'},
{from: '6b2d9e03-e192-4c0c-ad5a-67316606b1fa', to: '5365e07d-9da4-4649-a830-5d5ee8e494b4'},
{from: '8d939922-e529-4b5a-8d03-f8b7b52d9df3', to: '896608ab-e885-4db9-800d-5b06f8bb5b7f'},
{from: '8b4fe9fb-ed05-48ab-b6c0-59e9756f2240', to: 'b6b3880b-7f93-47ee-ab52-439a64f95f4d'},
{from: 'e291dd22-080b-4cb3-aaef-e8a512619a41', to: '2c010fe6-1929-4c32-a7e9-6652356d0368'},
{from: 'a97f6bc3-f26a-437f-b814-5f0615d28d21', to: '7fbcc6ed-5907-49f1-a300-7f670439795d'},
{from: 'a14a4fe4-ba22-4643-8363-947eb4dbe561', to: '8b4fe9fb-ed05-48ab-b6c0-59e9756f2240'},
{from: '6b2d9e03-e192-4c0c-ad5a-67316606b1fa', to: '2c010fe6-1929-4c32-a7e9-6652356d0368'},
{from: '38cf3f0e-b340-4209-b799-b3dd35d0d902', to: 'a97f6bc3-f26a-437f-b814-5f0615d28d21'},
{from: '3c1c2210-17f8-4ebf-8a99-f86dd259efb4', to: '8d939922-e529-4b5a-8d03-f8b7b52d9df3'},
{from: '5365e07d-9da4-4649-a830-5d5ee8e494b4', to: '9e17db98-4cb4-49b2-968b-01457bcf6d33'},
{from: '2d1d46dd-44e2-42f8-9ab9-872ecf0e7818', to: '896608ab-e885-4db9-800d-5b06f8bb5b7f'},
{from: '94912127-58c6-45cd-8015-f074af5be053', to: '5365e07d-9da4-4649-a830-5d5ee8e494b4'},
{from: '896608ab-e885-4db9-800d-5b06f8bb5b7f', to: '7fbcc6ed-5907-49f1-a300-7f670439795d'},
{from: '64229e08-c15e-41d1-ab76-77e30ac38b9c', to: 'a97f6bc3-f26a-437f-b814-5f0615d28d21'},
{from: 'e291dd22-080b-4cb3-aaef-e8a512619a41', to: '5365e07d-9da4-4649-a830-5d5ee8e494b4'},
{from: '7fbcc6ed-5907-49f1-a300-7f670439795d', to: '53de2cb4-7705-456d-a271-d580e4cc17a4'},
{from: '5365e07d-9da4-4649-a830-5d5ee8e494b4', to: '2d1d46dd-44e2-42f8-9ab9-872ecf0e7818'},
{from: '2c010fe6-1929-4c32-a7e9-6652356d0368', to: '3c1c2210-17f8-4ebf-8a99-f86dd259efb4'}
                            ]);