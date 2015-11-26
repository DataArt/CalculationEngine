var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '7f8abde3-1ac8-4725-83ba-b64d6a4e8faa', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 7f8abde3-1ac8-4725-83ba-b64d6a4e8faa<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(2.5); Formula Ptg: 2.5 EVEN ; Ptgs: VALUE EVEN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@89c65d5'},
{id: '11cf351e-a382-4b03-95a7-65fd538ff170', label: 'EVEN\n4.0', color: '#f0ad4e', title: 'Name: EVEN<br>Alias: null<br>Value: 4.0<br>Type: FUNCTION<br>Id: 11cf351e-a382-4b03-95a7-65fd538ff170<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@89c65d5'},
{id: '5d35eae8-8549-4799-8868-824e0004eb65', label: 'VALUE\n2.5', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.5<br>Type: CONSTANT_VALUE<br>Id: 5d35eae8-8549-4799-8868-824e0004eb65<br>Formula Expression: Formula String: VALUE; Formula Values: 2.5; Formula Ptg: 2.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@89c65d5'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '11cf351e-a382-4b03-95a7-65fd538ff170', to: '7f8abde3-1ac8-4725-83ba-b64d6a4e8faa'},
{from: '5d35eae8-8549-4799-8868-824e0004eb65', to: '11cf351e-a382-4b03-95a7-65fd538ff170'}
                            ]);