var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '356f0e09-2e3d-49ff-afb4-59bbcdda1633', label: 'A3\n42184.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 42184.0<br>Type: CELL_WITH_VALUE<br>Id: 356f0e09-2e3d-49ff-afb4-59bbcdda1633<br>Formula Expression: Formula String: A3; Formula Values: 42184.0; Formula Ptg: 42184.0; Ptgs: A3 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3a3e78f'},
{id: '19ceac3a-0c18-4070-a742-e024810a397b', label: 'A4\n42347.0', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 42347.0<br>Type: CELL_WITH_VALUE<br>Id: 19ceac3a-0c18-4070-a742-e024810a397b<br>Formula Expression: Formula String: A4; Formula Values: 42347.0; Formula Ptg: 42347.0; Ptgs: A4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3a3e78f'},
{id: '8e65ca92-2191-4a39-93da-8d47c804fc59', label: 'DAYS360\n-160.0', color: '#f0ad4e', title: 'Name: DAYS360<br>Alias: null<br>Value: -160.0<br>Type: FUNCTION<br>Id: 8e65ca92-2191-4a39-93da-8d47c804fc59<br>Formula Expression: Formula String: DAYS360(A3, A4); Formula Values: DAYS360(42184.0, 42347.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3a3e78f'},
{id: '7830cd52-63ec-4cea-9b8b-82159a75ad61', label: 'B8\n-160.0', color: '#31b0d5', title: 'Name: B8<br>Alias: null<br>Value: -160.0<br>Type: CELL_WITH_FORMULA<br>Id: 7830cd52-63ec-4cea-9b8b-82159a75ad61<br>Formula Expression: Formula String: DAYS360(A3, A4); Formula Values: DAYS360(42184.0, 42347.0); Formula Ptg: 42184.0, 42347.0 DAYS360 ; Ptgs: A3, A4 DAYS360  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3a3e78f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '8e65ca92-2191-4a39-93da-8d47c804fc59', to: '7830cd52-63ec-4cea-9b8b-82159a75ad61'},
{from: '356f0e09-2e3d-49ff-afb4-59bbcdda1633', to: '8e65ca92-2191-4a39-93da-8d47c804fc59'},
{from: '19ceac3a-0c18-4070-a742-e024810a397b', to: '8e65ca92-2191-4a39-93da-8d47c804fc59'}
                            ]);