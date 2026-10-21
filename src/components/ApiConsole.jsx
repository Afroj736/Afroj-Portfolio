const ENDPOINT = "https://api.v1.playbackhealth.com/v1/auth/session";

const S = ({ children }) => <span className="text-secondary">{children}</span>;
const P = ({ children }) => <span className="text-primary">{children}</span>;
const O = ({ children }) => <span className="text-outline">{children}</span>;

export default function ApiConsole({ embedded = false }) {
  const copyEndpoint = () => navigator.clipboard?.writeText(ENDPOINT);

  return (
    <div>
      {!embedded && <h2 className="font-headline-lg text-headline-lg mb-8">API Testing Command Center</h2>}
      {embedded && (
        <h3 className="font-headline-md text-headline-md mb-4 text-on-surface">API Testing Command Center</h3>
      )}
      <div className="bg-surface-container-lowest rounded-xl overflow-hidden border border-white/10 shadow-2xl">
        <div className="bg-surface-container-high px-6 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="font-label-caps text-label-caps text-outline">
              METHOD: <span className="text-secondary">GET</span>
            </span>
            <span className="font-code-md text-code-md text-on-surface break-all">{ENDPOINT}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Copy endpoint"
              onClick={copyEndpoint}
              className="material-symbols-outlined text-[16px] text-outline hover:text-white"
            >
              content_copy
            </button>
            <span className="material-symbols-outlined text-[16px] text-outline cursor-pointer hover:text-white">
              download
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 border-b lg:border-b-0 lg:border-r border-white/5 bg-black/40">
            <h4 className="font-label-caps text-label-caps text-primary mb-4">// REST ASSURED SNIPPET</h4>
            <pre className="font-code-md text-code-md text-on-surface-variant leading-relaxed overflow-x-auto">
              <span className="text-tertiary">@Test</span>
              {"\n"}
              <P>public void</P> <S>validateAuthToken()</S> {"{\n    "}
              <O>given()</O>
              {"\n        .header("}
              <S>"Authorization"</S>, <S>"Bearer "</S>
              {" + token)\n    "}
              <O>.when()</O>
              {"\n        .get("}
              <S>"/auth/session"</S>
              {")\n    "}
              <O>.then()</O>
              {"\n        .statusCode("}
              <S>200</S>
              {")\n        .body("}
              <S>"status"</S>, equalTo(<S>"active"</S>
              {"))\n        .body("}
              <S>"user.role"</S>, containsString(<S>"admin"</S>
              {"));\n}"}
            </pre>
          </div>
          <div className="p-8 bg-black/60">
            <h4 className="font-label-caps text-label-caps text-secondary mb-4">// RESPONSE PAYLOAD</h4>
            <pre className="font-code-md text-code-md text-outline leading-relaxed overflow-x-auto">
              {"{\n  "}
              <P>"status"</P>: <S>"success"</S>
              {",\n  "}
              <P>"data"</P>
              {": {\n    "}
              <P>"id"</P>: <S>"session_88291"</S>
              {",\n    "}
              <P>"expires_at"</P>: <S>"2024-12-31T23:59:59Z"</S>
              {",\n    "}
              <P>"features"</P>
              {": [\n      "}
              <S>"dashboard"</S>
              {",\n      "}
              <S>"automation_api"</S>
              {",\n      "}
              <S>"metrics_export"</S>
              {"\n    ]\n  }\n}"}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
