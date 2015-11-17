var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '12f9cb6c-440a-41b4-84d8-74d67debf213', label: 'B1\n15.154262241479259', color: '#31b0d5', title: 'Name: B1<br>Value: 15.154262241479259<br>Type: CELL_WITH_FORMULA<br>Id: 12f9cb6c-440a-41b4-84d8-74d67debf213<br>Formula Expression: Formula String: EXP(EXP(VALUE)); Formula Values: EXP(EXP(1.0)); Formula Ptg: 1.0 EXP  EXP ; Ptgs: VALUE EXP  EXP  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5afba80c'},
{id: '8f705f04-6718-46c2-8738-9faa112f51b9', label: 'A1\n2.718281828459045', color: '#31b0d5', title: 'Name: A1<br>Value: 2.718281828459045<br>Type: CELL_WITH_FORMULA<br>Id: 8f705f04-6718-46c2-8738-9faa112f51b9<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(1.0); Formula Ptg: 1.0 EXP ; Ptgs: VALUE EXP  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5afba80c'},
{id: '94ec99d5-2d72-4711-bed3-1d24a5cdb32c', label: 'A1\n2.718281828459045', color: '#31b0d5', title: 'Name: A1<br>Value: 2.718281828459045<br>Type: CELL_WITH_FORMULA<br>Id: 94ec99d5-2d72-4711-bed3-1d24a5cdb32c<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(1.0); Formula Ptg: 1.0 EXP ; Ptgs: VALUE EXP  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5afba80c'},
{id: '224d03a0-52fa-4817-bca2-c873b9343281', label: 'A2\n7.3890560989306495', color: '#31b0d5', title: 'Name: A2<br>Value: 7.3890560989306495<br>Type: CELL_WITH_FORMULA<br>Id: 224d03a0-52fa-4817-bca2-c873b9343281<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(2.0); Formula Ptg: 2.0 EXP ; Ptgs: VALUE EXP  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5afba80c'},
{id: 'b52cbece-7887-4b9e-a9a4-2c7a4b1a00eb', label: 'EXP\n15.154262241479259', color: '#f0ad4e', title: 'Name: EXP<br>Value: 15.154262241479259<br>Type: FUNCTION<br>Id: b52cbece-7887-4b9e-a9a4-2c7a4b1a00eb<br>Formula Expression: Formula String: EXP(EXP(VALUE)); Formula Values: EXP(EXP(1.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5afba80c'},
{id: '721972dd-6e36-4fbb-8b03-c9f3803afc54', label: 'EXP\n2.718281828459045', color: '#f0ad4e', title: 'Name: EXP<br>Value: 2.718281828459045<br>Type: FUNCTION<br>Id: 721972dd-6e36-4fbb-8b03-c9f3803afc54<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5afba80c'},
{id: '06ede73e-5319-4953-83e4-0192ae9881d2', label: 'EXP\n7.3890560989306495', color: '#f0ad4e', title: 'Name: EXP<br>Value: 7.3890560989306495<br>Type: FUNCTION<br>Id: 06ede73e-5319-4953-83e4-0192ae9881d2<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(2.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5afba80c'},
{id: 'ebe88d37-ef7a-4765-a5ce-1a63bd778657', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: ebe88d37-ef7a-4765-a5ce-1a63bd778657<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5afba80c'},
{id: '8a07a717-3b61-4dd5-a660-f014a57e129b', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 8a07a717-3b61-4dd5-a660-f014a57e129b<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5afba80c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ebe88d37-ef7a-4765-a5ce-1a63bd778657', to: '721972dd-6e36-4fbb-8b03-c9f3803afc54'},
{from: '8a07a717-3b61-4dd5-a660-f014a57e129b', to: '06ede73e-5319-4953-83e4-0192ae9881d2'},
{from: '721972dd-6e36-4fbb-8b03-c9f3803afc54', to: '8f705f04-6718-46c2-8738-9faa112f51b9'},
{from: 'b52cbece-7887-4b9e-a9a4-2c7a4b1a00eb', to: '12f9cb6c-440a-41b4-84d8-74d67debf213'},
{from: '721972dd-6e36-4fbb-8b03-c9f3803afc54', to: '94ec99d5-2d72-4711-bed3-1d24a5cdb32c'},
{from: '8f705f04-6718-46c2-8738-9faa112f51b9', to: 'b52cbece-7887-4b9e-a9a4-2c7a4b1a00eb'},
{from: '06ede73e-5319-4953-83e4-0192ae9881d2', to: '224d03a0-52fa-4817-bca2-c873b9343281'}
                            ]);