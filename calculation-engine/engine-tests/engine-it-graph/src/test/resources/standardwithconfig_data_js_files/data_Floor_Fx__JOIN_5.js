var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '809abfaa-819e-419c-8649-dac3690b348e', label: 'A1\n2.0', color: '#31b0d5', title: 'Name: A1<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 809abfaa-819e-419c-8649-dac3690b348e<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(2.0, 3.7); Formula Ptg: 2.0, 3.7 FLOOR ; Ptgs: VALUE, VALUE FLOOR  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@108817cc'},
{id: '61d77a91-3f0d-4cca-8373-9208c16ead9f', label: 'B2\n30.0', color: '#31b0d5', title: 'Name: B2<br>Value: 30.0<br>Type: CELL_WITH_FORMULA<br>Id: 61d77a91-3f0d-4cca-8373-9208c16ead9f<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(3.0, 32.5678); Formula Ptg: 3.0, 32.5678 FLOOR ; Ptgs: VALUE, VALUE FLOOR  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@108817cc'},
{id: '064f2485-a2f7-4a83-8865-62e07cb2bf65', label: 'VALUE\n32.5678', color: '#31b0d5', title: 'Name: VALUE<br>Value: 32.5678<br>Type: CONSTANT_VALUE<br>Id: 064f2485-a2f7-4a83-8865-62e07cb2bf65<br>Formula Expression: Formula String: VALUE; Formula Values: 32.5678; Formula Ptg: 32.5678; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@108817cc'},
{id: 'dba9bff1-e364-4c15-9f1a-0f712fd4fffc', label: 'FLOOR\n2.0', color: '#f0ad4e', title: 'Name: FLOOR<br>Value: 2.0<br>Type: FUNCTION<br>Id: dba9bff1-e364-4c15-9f1a-0f712fd4fffc<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(2.0, 3.7); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@108817cc'},
{id: '525496e8-72c5-4749-a635-b500be7689e8', label: 'FLOOR\n30.0', color: '#f0ad4e', title: 'Name: FLOOR<br>Value: 30.0<br>Type: FUNCTION<br>Id: 525496e8-72c5-4749-a635-b500be7689e8<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(3.0, 32.5678); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@108817cc'},
{id: '6f23be59-0b1c-4d03-80c1-7e9b95c7c322', label: 'VALUE\n3.7', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.7<br>Type: CONSTANT_VALUE<br>Id: 6f23be59-0b1c-4d03-80c1-7e9b95c7c322<br>Formula Expression: Formula String: VALUE; Formula Values: 3.7; Formula Ptg: 3.7; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@108817cc'},
{id: 'fb4f76b9-24db-48a3-a16a-8003154af772', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: fb4f76b9-24db-48a3-a16a-8003154af772<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@108817cc'},
{id: '59bbce4b-641d-43a0-8b69-290a86d167b5', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 59bbce4b-641d-43a0-8b69-290a86d167b5<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@108817cc'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '59bbce4b-641d-43a0-8b69-290a86d167b5', to: '525496e8-72c5-4749-a635-b500be7689e8'},
{from: '064f2485-a2f7-4a83-8865-62e07cb2bf65', to: '525496e8-72c5-4749-a635-b500be7689e8'},
{from: 'dba9bff1-e364-4c15-9f1a-0f712fd4fffc', to: '809abfaa-819e-419c-8649-dac3690b348e'},
{from: '525496e8-72c5-4749-a635-b500be7689e8', to: '61d77a91-3f0d-4cca-8373-9208c16ead9f'},
{from: 'fb4f76b9-24db-48a3-a16a-8003154af772', to: 'dba9bff1-e364-4c15-9f1a-0f712fd4fffc'},
{from: '6f23be59-0b1c-4d03-80c1-7e9b95c7c322', to: 'dba9bff1-e364-4c15-9f1a-0f712fd4fffc'}
                            ]);