"""Derive favicon / app icon / social-share assets from public/logo.png.

Run: python3 scripts/generate_brand_assets.py
"""

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "public" / "logo.png"

# Bounding box of the "N" letterform inside the full lockup, used for the
# square icons where the full 3.5:1 lockup would be illegible.
MARK_BOX = (730, 250, 1010, 575)

BACKGROUND = (255, 255, 255, 255)


def square_icon(logo: Image.Image, size: int, padding: float = 0.16) -> Image.Image:
    mark = logo.crop(MARK_BOX)
    canvas = Image.new("RGBA", (size, size), BACKGROUND)
    inner = int(size * (1 - padding * 2))
    ratio = min(inner / mark.width, inner / mark.height)
    scaled = mark.resize(
        (max(1, round(mark.width * ratio)), max(1, round(mark.height * ratio))),
        Image.LANCZOS,
    )
    canvas.alpha_composite(
        scaled, ((size - scaled.width) // 2, (size - scaled.height) // 2)
    )
    return canvas


def social_card(logo: Image.Image, width: int, height: int) -> Image.Image:
    canvas = Image.new("RGBA", (width, height), BACKGROUND)
    target = int(width * 0.72)
    ratio = target / logo.width
    scaled = logo.resize(
        (target, max(1, round(logo.height * ratio))), Image.LANCZOS
    )
    canvas.alpha_composite(
        scaled, ((width - scaled.width) // 2, (height - scaled.height) // 2)
    )
    return canvas


def main() -> None:
    logo = Image.open(SOURCE).convert("RGBA")

    outputs = {
        ROOT / "app" / "icon.png": square_icon(logo, 512),
        ROOT / "app" / "apple-icon.png": square_icon(logo, 180, padding=0.12),
        ROOT / "public" / "og-image.png": social_card(logo, 1200, 630),
    }

    for path, image in outputs.items():
        image.convert("RGB").save(path, "PNG", optimize=True)
        print(f"wrote {path.relative_to(ROOT)} ({image.width}x{image.height})")


if __name__ == "__main__":
    main()
