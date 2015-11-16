var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4f084254-6e6d-4012-a11d-dc2603077575', label: 'FLOOR\n2.0', color: '#f0ad4e', title: 'Name: FLOOR<br>Value: 2.0<br>Type: FUNCTION<br>Id: 4f084254-6e6d-4012-a11d-dc2603077575<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(2.0, 3.7); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@336365bc'},
{id: '869156d6-4a01-43a2-a965-f5702be1e85d', label: 'A1\n2.0', color: '#31b0d5', title: 'Name: A1<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 869156d6-4a01-43a2-a965-f5702be1e85d<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(2.0, 3.7); Formula Ptg: 2.0, 3.7 FLOOR ; Ptgs: VALUE, VALUE FLOOR  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@336365bc'},
{id: '00d917c2-40aa-4e85-8ad3-901052061a98', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 00d917c2-40aa-4e85-8ad3-901052061a98<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@336365bc'},
{id: '3915d86d-3e93-493d-b0a9-3e73abfec5f8', label: 'VALUE\n32.5678', color: '#31b0d5', title: 'Name: VALUE<br>Value: 32.5678<br>Type: CONSTANT_VALUE<br>Id: 3915d86d-3e93-493d-b0a9-3e73abfec5f8<br>Formula Expression: Formula String: VALUE; Formula Values: 32.5678; Formula Ptg: 32.5678; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@336365bc'},
{id: '6c83932d-41da-491f-9bca-966c563e82f1', label: 'B2\n30.0', color: '#31b0d5', title: 'Name: B2<br>Value: 30.0<br>Type: CELL_WITH_FORMULA<br>Id: 6c83932d-41da-491f-9bca-966c563e82f1<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(3.0, 32.5678); Formula Ptg: 3.0, 32.5678 FLOOR ; Ptgs: VALUE, VALUE FLOOR  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@336365bc'},
{id: '1f6ed905-0428-499b-a0cf-d04e497105ce', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 1f6ed905-0428-499b-a0cf-d04e497105ce<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@336365bc'},
{id: 'f22f3992-ba27-4f52-9af4-88201423048d', label: 'FLOOR\n30.0', color: '#f0ad4e', title: 'Name: FLOOR<br>Value: 30.0<br>Type: FUNCTION<br>Id: f22f3992-ba27-4f52-9af4-88201423048d<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(3.0, 32.5678); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@336365bc'},
{id: '2969765b-6e54-4d61-add5-b2b5bca27299', label: 'VALUE\n3.7', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.7<br>Type: CONSTANT_VALUE<br>Id: 2969765b-6e54-4d61-add5-b2b5bca27299<br>Formula Expression: Formula String: VALUE; Formula Values: 3.7; Formula Ptg: 3.7; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@336365bc'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3915d86d-3e93-493d-b0a9-3e73abfec5f8', to: 'f22f3992-ba27-4f52-9af4-88201423048d'},
{from: 'f22f3992-ba27-4f52-9af4-88201423048d', to: '6c83932d-41da-491f-9bca-966c563e82f1'},
{from: '1f6ed905-0428-499b-a0cf-d04e497105ce', to: 'f22f3992-ba27-4f52-9af4-88201423048d'},
{from: '00d917c2-40aa-4e85-8ad3-901052061a98', to: '4f084254-6e6d-4012-a11d-dc2603077575'},
{from: '2969765b-6e54-4d61-add5-b2b5bca27299', to: '4f084254-6e6d-4012-a11d-dc2603077575'},
{from: '4f084254-6e6d-4012-a11d-dc2603077575', to: '869156d6-4a01-43a2-a965-f5702be1e85d'}
                            ]);