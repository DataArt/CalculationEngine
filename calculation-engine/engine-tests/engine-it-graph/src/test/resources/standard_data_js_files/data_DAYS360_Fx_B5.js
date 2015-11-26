var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'a04ee253-aa23-47a0-a5d3-7908fcea8ccc', label: 'A2\n42029.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 42029.0<br>Type: CELL_WITH_VALUE<br>Id: a04ee253-aa23-47a0-a5d3-7908fcea8ccc<br>Formula Expression: Formula String: A2; Formula Values: 42029.0; Formula Ptg: 42029.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2dc995f4'},
{id: 'da46b27e-3c51-4101-9a3e-ff34fbd92c16', label: 'B5\n24.0', color: '#31b0d5', title: 'Name: B5<br>Alias: null<br>Value: 24.0<br>Type: CELL_WITH_FORMULA<br>Id: da46b27e-3c51-4101-9a3e-ff34fbd92c16<br>Formula Expression: Formula String: DAYS360(A2, A1); Formula Values: DAYS360(42029.0, 42005.0); Formula Ptg: 42029.0, 42005.0 DAYS360 ; Ptgs: A2, A1 DAYS360  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2dc995f4'},
{id: '0f5bcad0-afec-4b62-9753-b398a983635a', label: 'DAYS360\n24.0', color: '#f0ad4e', title: 'Name: DAYS360<br>Alias: null<br>Value: 24.0<br>Type: FUNCTION<br>Id: 0f5bcad0-afec-4b62-9753-b398a983635a<br>Formula Expression: Formula String: DAYS360(A2, A1); Formula Values: DAYS360(42029.0, 42005.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2dc995f4'},
{id: 'ab716680-2807-467b-a58f-2d3f3f2060b0', label: 'A1\n42005.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 42005.0<br>Type: CELL_WITH_VALUE<br>Id: ab716680-2807-467b-a58f-2d3f3f2060b0<br>Formula Expression: Formula String: A1; Formula Values: 42005.0; Formula Ptg: 42005.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2dc995f4'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ab716680-2807-467b-a58f-2d3f3f2060b0', to: '0f5bcad0-afec-4b62-9753-b398a983635a'},
{from: '0f5bcad0-afec-4b62-9753-b398a983635a', to: 'da46b27e-3c51-4101-9a3e-ff34fbd92c16'},
{from: 'a04ee253-aa23-47a0-a5d3-7908fcea8ccc', to: '0f5bcad0-afec-4b62-9753-b398a983635a'}
                            ]);