from xlrd import open_workbook
from xlutils.copy import copy
rb = open_workbook('output_template.xls',formatting_info=True)
rs = rb.sheet_by_index(0)
wb = copy(rb)
ws = wb.get_sheet(0)
for i,cell in enumerate(rs.col(8)):
    if not i:
        continue
    ws.write(i,2,22,plain)
wb.save('output.xls')