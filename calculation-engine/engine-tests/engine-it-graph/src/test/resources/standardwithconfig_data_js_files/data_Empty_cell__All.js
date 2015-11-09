var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'fd7430ab-06a4-4e5a-9c64-b00633cdedc0', label: 'E5\n115.0', color: '#31b0d5', title: 'Name: E5<br>Value: 115.0<br>Type: CELL_WITH_FORMULA<br>Id: fd7430ab-06a4-4e5a-9c64-b00633cdedc0<br>Formula Expression: Formula String: SUM(E1:E4); Formula Values: SUM(5.0, 7.0, 57.0, 46.0); Formula Ptg: 5.0, 7.0, 57.0, 46.0 SUM ; Ptgs: E1:E4 SUM  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@d140627'},
{id: '17f978a3-a8c7-482e-b1b5-758ca9a93c02', label: 'A1\n12.0', color: '#31b0d5', title: 'Name: A1<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: 17f978a3-a8c7-482e-b1b5-758ca9a93c02<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@d140627'},
{id: 'd4236023-a191-4497-9401-7103263a67e7', label: 'E1:E4\n[[5.0], [7.0], [57.0], [46.0]]', color: '#31b0d5', title: 'Name: E1:E4<br>Value: [[5.0], [7.0], [57.0], [46.0]]<br>Type: RANGE<br>Id: d4236023-a191-4497-9401-7103263a67e7<br>Formula Expression: Formula String: E1:E4; Formula Values: [[5.0], [7.0], [57.0], [46.0]]; Formula Ptg: [[5.0], [7.0], [57.0], [46.0]]; Ptgs: E1:E4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@d140627'},
{id: 'ad33e3de-47f2-4613-834a-de983a7f2324', label: 'SUM\n115.0', color: '#f0ad4e', title: 'Name: SUM<br>Value: 115.0<br>Type: FUNCTION<br>Id: ad33e3de-47f2-4613-834a-de983a7f2324<br>Formula Expression: Formula String: SUM(E1:E4); Formula Values: SUM(5.0, 7.0, 57.0, 46.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@d140627'},
{id: '48e37076-89ce-49a6-a616-cff2b98e69dd', label: 'VALUE\n12.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 12.0<br>Type: CONSTANT_VALUE<br>Id: 48e37076-89ce-49a6-a616-cff2b98e69dd<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@d140627'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ad33e3de-47f2-4613-834a-de983a7f2324', to: 'fd7430ab-06a4-4e5a-9c64-b00633cdedc0'},
{from: 'd4236023-a191-4497-9401-7103263a67e7', to: 'ad33e3de-47f2-4613-834a-de983a7f2324'},
{from: '48e37076-89ce-49a6-a616-cff2b98e69dd', to: '17f978a3-a8c7-482e-b1b5-758ca9a93c02'}
                            ]);