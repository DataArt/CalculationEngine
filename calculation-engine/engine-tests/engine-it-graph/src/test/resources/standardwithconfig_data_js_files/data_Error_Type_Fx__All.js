var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '7f8f12ae-b466-4b1c-be8c-e5474d7efbe4', label: 'C4\n2.0', color: '#31b0d5', title: 'Name: C4<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 7f8f12ae-b466-4b1c-be8c-e5474d7efbe4<br>Formula Expression: Formula String: ERROR.TYPE(A2); Formula Values: ERROR.TYPE(#DIV/0!); Formula Ptg: #DIV/0! ERROR.TYPE ; Ptgs: A2 ERROR.TYPE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@674b2703'},
{id: 'b517f970-6299-42f8-bd80-ad4a004b9813', label: 'VALUE\n#N/A', color: '#31b0d5', title: 'Name: VALUE<br>Value: #N/A<br>Type: CONSTANT_VALUE<br>Id: b517f970-6299-42f8-bd80-ad4a004b9813<br>Formula Expression: Formula String: VALUE; Formula Values: #N/A; Formula Ptg: #N/A; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@674b2703'},
{id: 'dd460bc8-8af6-49bf-bfb1-b381d171ed8d', label: 'ERROR.TYPE\n2.0', color: '#f0ad4e', title: 'Name: ERROR.TYPE<br>Value: 2.0<br>Type: FUNCTION<br>Id: dd460bc8-8af6-49bf-bfb1-b381d171ed8d<br>Formula Expression: Formula String: ERROR.TYPE(A2); Formula Values: ERROR.TYPE(#DIV/0!); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@674b2703'},
{id: '51bc9138-c066-4eec-8784-4afdbbd5075f', label: 'ERROR.TYPE\n7.0', color: '#f0ad4e', title: 'Name: ERROR.TYPE<br>Value: 7.0<br>Type: FUNCTION<br>Id: 51bc9138-c066-4eec-8784-4afdbbd5075f<br>Formula Expression: Formula String: ERROR.TYPE(VALUE); Formula Values: ERROR.TYPE(#N/A); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@674b2703'},
{id: '643dabec-5d00-409c-b9bc-eb1bece19489', label: 'A2\n#DIV/0!', color: '#31b0d5', title: 'Name: A2<br>Value: #DIV/0!<br>Type: CELL_WITH_VALUE<br>Id: 643dabec-5d00-409c-b9bc-eb1bece19489<br>Formula Expression: Formula String: A2; Formula Values: #DIV/0!; Formula Ptg: #DIV/0!; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@674b2703'},
{id: '19672606-65cb-4248-818b-acac1a03e4dd', label: 'B3\n7.0', color: '#31b0d5', title: 'Name: B3<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 19672606-65cb-4248-818b-acac1a03e4dd<br>Formula Expression: Formula String: ERROR.TYPE(VALUE); Formula Values: ERROR.TYPE(#N/A); Formula Ptg: #N/A ERROR.TYPE ; Ptgs: VALUE ERROR.TYPE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@674b2703'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '51bc9138-c066-4eec-8784-4afdbbd5075f', to: '19672606-65cb-4248-818b-acac1a03e4dd'},
{from: 'dd460bc8-8af6-49bf-bfb1-b381d171ed8d', to: '7f8f12ae-b466-4b1c-be8c-e5474d7efbe4'},
{from: 'b517f970-6299-42f8-bd80-ad4a004b9813', to: '51bc9138-c066-4eec-8784-4afdbbd5075f'},
{from: '643dabec-5d00-409c-b9bc-eb1bece19489', to: 'dd460bc8-8af6-49bf-bfb1-b381d171ed8d'}
                            ]);