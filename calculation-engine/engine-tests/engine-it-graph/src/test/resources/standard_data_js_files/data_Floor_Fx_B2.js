var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd1f3d932-6adc-4d1a-b502-ebae89a6e028', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: d1f3d932-6adc-4d1a-b502-ebae89a6e028<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@b9dfc5a'},
{id: 'ff6f2779-bace-4343-ae8e-90ddad9c86cb', label: 'VALUE\n32.5678', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 32.5678<br>Type: CONSTANT_VALUE<br>Id: ff6f2779-bace-4343-ae8e-90ddad9c86cb<br>Formula Expression: Formula String: VALUE; Formula Values: 32.5678; Formula Ptg: 32.5678; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@b9dfc5a'},
{id: '2f9efc93-5e8b-4ab9-bcdf-907b482ae183', label: 'B2\n30.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 30.0<br>Type: CELL_WITH_FORMULA<br>Id: 2f9efc93-5e8b-4ab9-bcdf-907b482ae183<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(3.0, 32.5678); Formula Ptg: 3.0, 32.5678 FLOOR ; Ptgs: VALUE, VALUE FLOOR  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@b9dfc5a'},
{id: '2143466b-c8fe-49ad-a1ee-98c11a3bc849', label: 'FLOOR\n30.0', color: '#f0ad4e', title: 'Name: FLOOR<br>Alias: null<br>Value: 30.0<br>Type: FUNCTION<br>Id: 2143466b-c8fe-49ad-a1ee-98c11a3bc849<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(3.0, 32.5678); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@b9dfc5a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2143466b-c8fe-49ad-a1ee-98c11a3bc849', to: '2f9efc93-5e8b-4ab9-bcdf-907b482ae183'},
{from: 'ff6f2779-bace-4343-ae8e-90ddad9c86cb', to: '2143466b-c8fe-49ad-a1ee-98c11a3bc849'},
{from: 'd1f3d932-6adc-4d1a-b502-ebae89a6e028', to: '2143466b-c8fe-49ad-a1ee-98c11a3bc849'}
                            ]);