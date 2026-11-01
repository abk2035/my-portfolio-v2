import { SKILL_LOGOS, SKILL_STROKES } from "@/lib/skill-icons";

function SkillIcon({ name }: { name: string }) {
  const stroke = SKILL_STROKES[name];
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 24 24"
      fill={stroke ? "none" : "currentColor"}
      stroke={stroke ? "currentColor" : "none"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="flex-none"
    >
      <path d={stroke ?? SKILL_LOGOS[name] ?? ""} />
    </svg>
  );
}

export function SkillGroups({ groups }: { groups: { title: string; items: string[] }[] }) {
  return (
    <div className="flex flex-col gap-6">
      {groups.map((g) => (
        <div key={g.title}>
          <h3 className="mb-2.5 text-[15px] font-semibold">{g.title}</h3>
          <div className="flex flex-wrap gap-2">
            {g.items.map((name) => (
              <span
                key={name}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card py-1 pl-2.5 pr-3 text-[13px]"
              >
                <SkillIcon name={name} />
                {name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
