// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pdcgvXuy8y2PB8RHBdxsRH
// Component: oYuIcYka8edt
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateOnMutateForSpec,
  generateStateOnChangePropForCodeComponents,
  get as $stateGet,
  initializeCodeComponentStates,
  set as $stateSet,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Card from "../../Card"; // plasmic-import: FJlfWMQ-8uFi/component
import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdPassword } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: pdcgvXuy8y2PB8RHBdxsRH/projectcss
import sty from "./PlasmicLoginForm.module.css"; // plasmic-import: oYuIcYka8edt/css

createPlasmicElementProxy;

export const PlasmicLoginForm__VariantProps = new Array();

export const PlasmicLoginForm__ArgProps = new Array();

const $$ = {};

function PlasmicLoginForm__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "login.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        refName: "login",
        onMutate: generateOnMutateForSpec("value", FormWrapper_Helpers)
      },
      {
        path: "login.isSubmitting",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,
        refName: "login",
        onMutate: generateOnMutateForSpec("isSubmitting", FormWrapper_Helpers)
      },
      {
        path: "login2",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  return (
    <div
      data-plasmic-name={"loginForm"}
      data-plasmic-override={overrides.loginForm}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.loginForm
      )}
    >
      <Card
        data-plasmic-name={"card"}
        data-plasmic-override={overrides.card}
        className={classNames("__wab_instance", sty.card)}
        title={
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___2YnNb
            )}
          >
            {"Login"}
          </div>
        }
      >
        {(() => {
          const child$Props = {
            className: classNames("__wab_instance", sty.login),
            colon: false,
            extendedOnValuesChange: generateStateOnChangePropForCodeComponents(
              $state,
              "value",
              ["login", "value"],
              FormWrapper_Helpers
            ),
            formItems: undefined,
            initialValues: (() => {
              try {
                return undefined;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return undefined;
                }
                throw e;
              }
            })(),
            labelAlign: "left",
            labelCol: (() => {
              const __composite = { span: null, horizontalOnly: true };
              __composite["span"] = 8;
              return __composite;
            })(),
            layout: "horizontal",
            mode: undefined,
            onFinish: async values => {
              const $steps = {};
              $steps["updateLogin2"] = true
                ? (() => {
                    const actionArgs = {
                      variable: {
                        objRoot: $state,
                        variablePath: ["login2"]
                      },
                      operation: 4
                    };
                    return (({ variable, value, startIndex, deleteCount }) => {
                      if (!variable) {
                        return;
                      }
                      const { objRoot, variablePath } = variable;
                      const oldValue = $stateGet(objRoot, variablePath);
                      $stateSet(objRoot, variablePath, !oldValue);
                      return !oldValue;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateLogin2"] != null &&
                typeof $steps["updateLogin2"] === "object" &&
                typeof $steps["updateLogin2"].then === "function"
              ) {
                $steps["updateLogin2"] = await $steps["updateLogin2"];
              }
            },
            onIsSubmittingChange: generateStateOnChangePropForCodeComponents(
              $state,
              "isSubmitting",
              ["login", "isSubmitting"],
              FormWrapper_Helpers
            ),
            ref: ref => {
              $refs["login"] = ref;
            },
            requiredMark: false,
            wrapperCol: { span: 16, horizontalOnly: true }
          };
          initializeCodeComponentStates(
            $state,
            [
              {
                name: "value",
                plasmicStateName: "login.value"
              },
              {
                name: "isSubmitting",
                plasmicStateName: "login.isSubmitting"
              }
            ],

            [],
            FormWrapper_Helpers ?? {},
            child$Props
          );
          return (
            <FormWrapper
              data-plasmic-name={"login"}
              data-plasmic-override={overrides.login}
              {...child$Props}
            >
              <FormItemWrapper
                className={classNames("__wab_instance", sty.formField__zIxVb)}
                label={"User Name"}
                name={"name"}
              >
                <AntdInput
                  className={classNames("__wab_instance", sty.input)}
                />
              </FormItemWrapper>
              <FormItemWrapper
                className={classNames("__wab_instance", sty.formField__gl6I0)}
                label={"Password"}
                name={"password"}
                rules={[
                  {
                    ruleType: "whitespace",
                    message: "No white spaces allowed"
                  },
                  { ruleType: "required" }
                ]}
              >
                <AntdPassword
                  className={classNames("__wab_instance", sty.passwordInput)}
                />
              </FormItemWrapper>
              <AntdButton
                className={classNames("__wab_instance", sty.button)}
                disabled={false}
                href={`/home`}
                onClick={async () => {
                  const $steps = {};
                  $steps["goToHome"] = true
                    ? (() => {
                        const actionArgs = { destination: `/home` };
                        return (({ destination }) => {
                          if (
                            typeof destination === "string" &&
                            destination.startsWith("#")
                          ) {
                            document
                              .getElementById(destination.substr(1))
                              .scrollIntoView({ behavior: "smooth" });
                          } else {
                            location.assign(destination);
                          }
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["goToHome"] != null &&
                    typeof $steps["goToHome"] === "object" &&
                    typeof $steps["goToHome"].then === "function"
                  ) {
                    $steps["goToHome"] = await $steps["goToHome"];
                  }
                }}
                shape={"default"}
                size={"large"}
                submitsForm={true}
                type={"primary"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__nLkR
                  )}
                >
                  {"Submit"}
                </div>
              </AntdButton>
            </FormWrapper>
          );
        })()}
      </Card>
    </div>
  );
}

const PlasmicDescendants = {
  loginForm: ["loginForm", "card", "login", "input", "passwordInput", "button"],
  card: ["card", "login", "input", "passwordInput", "button"],
  login: ["login", "input", "passwordInput", "button"],
  input: ["input"],
  passwordInput: ["passwordInput"],
  button: ["button"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicLoginForm__ArgProps,
          internalVariantPropNames: PlasmicLoginForm__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLoginForm__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "loginForm") {
    func.displayName = "PlasmicLoginForm";
  } else {
    func.displayName = `PlasmicLoginForm.${nodeName}`;
  }
  return func;
}

export const PlasmicLoginForm = Object.assign(
  // Top-level PlasmicLoginForm renders the root element
  makeNodeComponent("loginForm"),
  {
    // Helper components rendering sub-elements
    card: makeNodeComponent("card"),
    login: makeNodeComponent("login"),
    input: makeNodeComponent("input"),
    passwordInput: makeNodeComponent("passwordInput"),
    button: makeNodeComponent("button"),
    // Metadata about props expected for PlasmicLoginForm
    internalVariantProps: PlasmicLoginForm__VariantProps,
    internalArgProps: PlasmicLoginForm__ArgProps
  }
);

export default PlasmicLoginForm;
/* prettier-ignore-end */