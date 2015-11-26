var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '11ecc0cc-62bc-40d6-942e-f4cf8058c93d', label: 'B2\n6.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: 11ecc0cc-62bc-40d6-942e-f4cf8058c93d<br>Formula Expression: Formula String: B2; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@184dbacc'},
{id: 'ea3caaa2-262f-4344-8704-2af8f789fe0a', label: 'D7\nTRUE', color: '#31b0d5', title: 'Name: D7<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: ea3caaa2-262f-4344-8704-2af8f789fe0a<br>Formula Expression: Formula String: ISERROR(SUM(B2, VALUE)); Formula Values: ISERROR(SUM(6.0, #REF!)); Formula Ptg: 6.0, #REF! SUM  ISERROR ; Ptgs: B2, VALUE SUM  ISERROR  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@184dbacc'},
{id: 'e8573803-5701-41b7-8083-b82b67d3ec1b', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: e8573803-5701-41b7-8083-b82b67d3ec1b<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@184dbacc'},
{id: '995f9a5e-44d1-4508-a229-efe26aba0f21', label: 'SUM\n#REF!', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: #REF!<br>Type: FUNCTION<br>Id: 995f9a5e-44d1-4508-a229-efe26aba0f21<br>Formula Expression: Formula String: SUM(B2, VALUE); Formula Values: SUM(6.0, #REF!); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@184dbacc'},
{id: '467b3dbe-57ec-498d-9987-87e252745341', label: 'ISERROR\nTRUE', color: '#f0ad4e', title: 'Name: ISERROR<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 467b3dbe-57ec-498d-9987-87e252745341<br>Formula Expression: Formula String: ISERROR(SUM(B2, VALUE)); Formula Values: ISERROR(SUM(6.0, #REF!)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@184dbacc'},
{id: '4472d635-7126-486c-9962-ba9f524e16f4', label: 'D2\n#REF!', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: 4472d635-7126-486c-9962-ba9f524e16f4<br>Formula Expression: Formula String: SUM(B2, VALUE); Formula Values: SUM(6.0, #REF!); Formula Ptg: 6.0, #REF! SUM ; Ptgs: B2, VALUE SUM  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@184dbacc'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '11ecc0cc-62bc-40d6-942e-f4cf8058c93d', to: '995f9a5e-44d1-4508-a229-efe26aba0f21'},
{from: '467b3dbe-57ec-498d-9987-87e252745341', to: 'ea3caaa2-262f-4344-8704-2af8f789fe0a'},
{from: '4472d635-7126-486c-9962-ba9f524e16f4', to: '467b3dbe-57ec-498d-9987-87e252745341'},
{from: 'e8573803-5701-41b7-8083-b82b67d3ec1b', to: '995f9a5e-44d1-4508-a229-efe26aba0f21'},
{from: '995f9a5e-44d1-4508-a229-efe26aba0f21', to: '4472d635-7126-486c-9962-ba9f524e16f4'}
                            ]);