# ['__bytes__', '__class__', '__class_getitem__', '__delattr__', '__dir__', '__doc__', '__enter__', '__eq__', '__exit__', '__format__', '__fspath__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rtruediv__', '__setattr__', '__sizeof__', '__slots__', '__str__', '__subclasshook__', '__truediv__', '_accessor', '_cached_cparts', '_cparts', '_drv', '_flavour', '_format_parsed_parts', '_from_parsed_parts', '_from_parts', '_hash', '_make_child', '_make_child_relpath', '_parse_args', '_parts', '_pparts', '_root', '_str', 'absolute', 'anchor', 'as_posix', 'as_uri', 'chmod', 'cwd', 'drive', 'exists', 'expanduser', 'glob', 'group', 'hardlink_to', 'home', 'is_absolute', 'is_block_device', 'is_char_device', 'is_dir', 'is_fifo', 'is_file', 'is_mount', 'is_relative_to', 'is_reserved', 'is_socket', 'is_symlink', 'iterdir', 'joinpath', 'lchmod', 'link_to', 'lstat', 'match', 'mkdir', 'name', 'open', 'owner', 'parent', 'parents', 'parts', 'read_bytes', 'read_text', 'readlink', 'relative_to', 'rename', 'replace', 'resolve', 'rglob', 'rmdir', 'root', 'samefile', 'stat', 'stem', 'suffix', 'suffixes', 'symlink_to', 'touch', 'unlink', 'with_name', 'with_stem', 'with_suffix', 'write_bytes', 'write_text']
from pathlib import Path
import subprocess
import os

path = Path(r"D:\jiva\develop\modules\zope_build\src")

for folder in path.iterdir():
    if folder.is_dir():
        if ".git" in os.listdir(folder):
            os.chdir(folder)
            # result = subprocess.run(
            #     ["git", "rev-parse", "HEAD"],  # Command as a list of arguments
            #     stdout=subprocess.PIPE,  # Capture standard output
            #     stderr=subprocess.PIPE,  # Capture standard error (if any)
            #     text=True,  # Return output as string, not bytes
            # )
            result = subprocess.run(
                ["git", "status", "--porcelain"],  # Porcelain format is easy to parse
                cwd=folder,                    # Specify the path to the repo
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                text=True                          # Return output as string, not bytes
            )
            if result.returncode == 0 and result.stdout.strip():
                # Print the commit hash (strip any extra whitespace)
                print(folder.name, result.stdout.strip())
            if result.returncode != 0:
                # Print the error if the command failed
                print(folder.name, "Error:", result.stderr)
            os.chdir(path)
        else:
            print("No .git folder", folder.name)
