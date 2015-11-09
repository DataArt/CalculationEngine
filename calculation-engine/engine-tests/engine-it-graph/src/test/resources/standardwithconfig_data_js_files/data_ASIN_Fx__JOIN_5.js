var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '8d391efa-c13c-47d4-9cbc-29d2e78bbaac', label: 'C1\n-0.5235987755982989', color: '#31b0d5', title: 'Name: C1<br>Value: -0.5235987755982989<br>Type: CELL_WITH_FORMULA<br>Id: 8d391efa-c13c-47d4-9cbc-29d2e78bbaac<br>Formula Expression: Formula String: ASIN(VALUE); Formula Values: ASIN(-0.5); Formula Ptg: -0.5 ASIN ; Ptgs: VALUE ASIN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@c82f6bd'},
{id: 'da4703cb-a987-4f33-acaf-aa7335a5dea7', label: 'VALUE\n-0.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: -0.5<br>Type: CONSTANT_VALUE<br>Id: da4703cb-a987-4f33-acaf-aa7335a5dea7<br>Formula Expression: Formula String: VALUE; Formula Values: -0.5; Formula Ptg: -0.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@c82f6bd'},
{id: 'c6a51a61-7dab-4f89-828b-915f4085a4e6', label: 'E3\n1.5707963267948966', color: '#31b0d5', title: 'Name: E3<br>Value: 1.5707963267948966<br>Type: CELL_WITH_FORMULA<br>Id: c6a51a61-7dab-4f89-828b-915f4085a4e6<br>Formula Expression: Formula String: ASIN(A2); Formula Values: ASIN(1.0); Formula Ptg: 1.0 ASIN ; Ptgs: A2 ASIN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@c82f6bd'},
{id: '4c504164-5aa4-4c00-8c88-c7ab2d5353c7', label: 'A2\n1.0', color: '#31b0d5', title: 'Name: A2<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 4c504164-5aa4-4c00-8c88-c7ab2d5353c7<br>Formula Expression: Formula String: A2; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@c82f6bd'},
{id: 'b132756d-cbcb-4018-8e03-43a3a84404ab', label: 'ASIN\n1.5707963267948966', color: '#f0ad4e', title: 'Name: ASIN<br>Value: 1.5707963267948966<br>Type: FUNCTION<br>Id: b132756d-cbcb-4018-8e03-43a3a84404ab<br>Formula Expression: Formula String: ASIN(A2); Formula Values: ASIN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@c82f6bd'},
{id: '4675acda-1588-43d9-b2ab-26e701c4ca75', label: 'ASIN\n-0.5235987755982989', color: '#f0ad4e', title: 'Name: ASIN<br>Value: -0.5235987755982989<br>Type: FUNCTION<br>Id: 4675acda-1588-43d9-b2ab-26e701c4ca75<br>Formula Expression: Formula String: ASIN(VALUE); Formula Values: ASIN(-0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@c82f6bd'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4675acda-1588-43d9-b2ab-26e701c4ca75', to: '8d391efa-c13c-47d4-9cbc-29d2e78bbaac'},
{from: 'da4703cb-a987-4f33-acaf-aa7335a5dea7', to: '4675acda-1588-43d9-b2ab-26e701c4ca75'},
{from: '4c504164-5aa4-4c00-8c88-c7ab2d5353c7', to: 'b132756d-cbcb-4018-8e03-43a3a84404ab'},
{from: 'b132756d-cbcb-4018-8e03-43a3a84404ab', to: 'c6a51a61-7dab-4f89-828b-915f4085a4e6'}
                            ]);