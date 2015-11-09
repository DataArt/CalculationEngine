var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'c360a2e6-5dc1-4a5f-82d2-b4c892116989', label: 'VALUE\n1.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.5<br>Type: CONSTANT_VALUE<br>Id: c360a2e6-5dc1-4a5f-82d2-b4c892116989<br>Formula Expression: Formula String: VALUE; Formula Values: 1.5; Formula Ptg: 1.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@200eaca'},
{id: 'eb86906b-455c-4c1c-970c-13997ae362eb', label: 'B2\n2.0', color: '#31b0d5', title: 'Name: B2<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: eb86906b-455c-4c1c-970c-13997ae362eb<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(1.5); Formula Ptg: 1.5 EVEN ; Ptgs: VALUE EVEN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@200eaca'},
{id: 'd2564e28-5fab-4617-84f0-3d1eef703ce6', label: 'VALUE\n2.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.5<br>Type: CONSTANT_VALUE<br>Id: d2564e28-5fab-4617-84f0-3d1eef703ce6<br>Formula Expression: Formula String: VALUE; Formula Values: 2.5; Formula Ptg: 2.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@200eaca'},
{id: 'af94e334-76a0-4c85-a0e0-afb5f9e4cf64', label: 'EVEN\n2.0', color: '#f0ad4e', title: 'Name: EVEN<br>Value: 2.0<br>Type: FUNCTION<br>Id: af94e334-76a0-4c85-a0e0-afb5f9e4cf64<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(1.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@200eaca'},
{id: 'd1c00df2-6fcc-4ab0-93e5-e2c6c16c73ec', label: 'EVEN\n4.0', color: '#f0ad4e', title: 'Name: EVEN<br>Value: 4.0<br>Type: FUNCTION<br>Id: d1c00df2-6fcc-4ab0-93e5-e2c6c16c73ec<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@200eaca'},
{id: '9407705e-aa96-4686-ad63-4d4ce054b0a0', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 9407705e-aa96-4686-ad63-4d4ce054b0a0<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(2.5); Formula Ptg: 2.5 EVEN ; Ptgs: VALUE EVEN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@200eaca'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'c360a2e6-5dc1-4a5f-82d2-b4c892116989', to: 'af94e334-76a0-4c85-a0e0-afb5f9e4cf64'},
{from: 'd2564e28-5fab-4617-84f0-3d1eef703ce6', to: 'd1c00df2-6fcc-4ab0-93e5-e2c6c16c73ec'},
{from: 'af94e334-76a0-4c85-a0e0-afb5f9e4cf64', to: 'eb86906b-455c-4c1c-970c-13997ae362eb'},
{from: 'd1c00df2-6fcc-4ab0-93e5-e2c6c16c73ec', to: '9407705e-aa96-4686-ad63-4d4ce054b0a0'}
                            ]);