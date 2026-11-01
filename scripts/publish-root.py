from pathlib import Path
import shutil
root = Path(__file__).resolve().parents[1]
for source in (root / 'dist').rglob('*'):
    if source.is_file():
        target = root / source.relative_to(root / 'dist')
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(source, target)
print('Static site copied to the repository root for main / (root) publishing.')
