from pathlib import Path
import json
root = Path(__file__).resolve().parents[1]
data = json.loads((root / 'dist/projects.json').read_text())
(root / 'dist/projects.js').write_text('window.PROJECTS = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';\n')
