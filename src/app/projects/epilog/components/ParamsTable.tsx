import React from "react";

export default function ParamsTable({ paramsNode }: any) {
  if (!paramsNode) return null;
  return (
    <section className="mt-6">
      <h3 className="text-sm font-semibold mb-2">ბოლო ნაბიჯი — პარამეტრები</h3>
      <table className="min-w-[480px] bg-white border border-neutral-200 rounded-xl overflow-hidden">
        <tbody>
          {Object.entries(paramsNode).map(([k, v]) => (
            <tr key={k} className="border-t">
              <td className="px-4 py-2 text-sm text-neutral-600">{k}</td>
              <td className="px-4 py-2 text-sm font-medium">{String(v)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
