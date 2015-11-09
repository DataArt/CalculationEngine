var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '663c2d10-7594-4c01-824d-411b643b3aae', label: 'B2\n-1.6472311463710965', color: '#31b0d5', title: 'Name: B2<br>Value: -1.6472311463710965<br>Type: CELL_WITH_FORMULA<br>Id: 663c2d10-7594-4c01-824d-411b643b3aae<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(-2.5); Formula Ptg: -2.5 ASINH ; Ptgs: VALUE ASINH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a510e0e'},
{id: '43f66966-e2d5-45c9-b349-ad0d8f69193b', label: 'VALUE\n-2.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: -2.5<br>Type: CONSTANT_VALUE<br>Id: 43f66966-e2d5-45c9-b349-ad0d8f69193b<br>Formula Expression: Formula String: VALUE; Formula Values: -2.5; Formula Ptg: -2.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a510e0e'},
{id: '6e5b0263-957c-4c93-9372-5c44410b5fd2', label: 'VALUE\n15.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 15.0<br>Type: CONSTANT_VALUE<br>Id: 6e5b0263-957c-4c93-9372-5c44410b5fd2<br>Formula Expression: Formula String: VALUE; Formula Values: 15.0; Formula Ptg: 15.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a510e0e'},
{id: '1e77f805-80c7-4f67-9975-9c06e4ac37fa', label: 'ASINH\n-1.6472311463710965', color: '#f0ad4e', title: 'Name: ASINH<br>Value: -1.6472311463710965<br>Type: FUNCTION<br>Id: 1e77f805-80c7-4f67-9975-9c06e4ac37fa<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(-2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a510e0e'},
{id: '38815081-482e-40c0-ac31-ce4447c079d1', label: 'B3\n3.4023066454805946', color: '#31b0d5', title: 'Name: B3<br>Value: 3.4023066454805946<br>Type: CELL_WITH_FORMULA<br>Id: 38815081-482e-40c0-ac31-ce4447c079d1<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(15.0); Formula Ptg: 15.0 ASINH ; Ptgs: VALUE ASINH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a510e0e'},
{id: '47b1cc62-0034-41dd-9257-4e49e27c0993', label: 'ASINH\n3.4023066454805946', color: '#f0ad4e', title: 'Name: ASINH<br>Value: 3.4023066454805946<br>Type: FUNCTION<br>Id: 47b1cc62-0034-41dd-9257-4e49e27c0993<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(15.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a510e0e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '47b1cc62-0034-41dd-9257-4e49e27c0993', to: '38815081-482e-40c0-ac31-ce4447c079d1'},
{from: '43f66966-e2d5-45c9-b349-ad0d8f69193b', to: '1e77f805-80c7-4f67-9975-9c06e4ac37fa'},
{from: '1e77f805-80c7-4f67-9975-9c06e4ac37fa', to: '663c2d10-7594-4c01-824d-411b643b3aae'},
{from: '6e5b0263-957c-4c93-9372-5c44410b5fd2', to: '47b1cc62-0034-41dd-9257-4e49e27c0993'}
                            ]);